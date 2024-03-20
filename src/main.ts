import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import helmet from "helmet";
import compression from "compression";
import {ConfigService} from "@nestjs/config";
import session from "express-session";
import MongoStore from "connect-mongo";
import fs from "fs";


async function bootstrap() {
    const app = await createApp();

    const configService = app.get(ConfigService);

    app.use(session({
            secret: configService.get('SESSION_SECRET'),
            store: MongoStore.create({mongoUrl: configService.get('MONGODB_URI')}),
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: parseInt(configService.get('SESSION_EXPIRATION')),
                sameSite: configService.get('SAME_SITE') as 'lax' | 'strict' | 'none' | boolean,
                httpOnly: configService.get('HTTP_ONLY') == 'true', // Ensure this is a boolean
                secure: configService.get('SECURE') == 'true', // Ensure this is a boolean
                domain: configService.get('COOKIE_DOMAIN'), // You might need to add this for production
                path: '/', // You might want to set this explicitly
            },
        })
    );

    app.use((req, res, next) => {
        console.log('Request received:', req.method, req.url);
        res.on('finish', () => {
            console.log('Response sent:', res.statusCode);
            console.log('Session data:', req.session);
        });
        next();
    });

    app.use(helmet());
    app.use(compression());
    app.enableCors({
        origin: configService.get('FRONTEND_URL'),
        credentials: true,
    });

    const httpAdapter = app.getHttpAdapter().getInstance();
    // Trust the first proxy
    httpAdapter.set('trust proxy', 1);

    await app.listen(configService.get('PORT'));
}


async function createApp() {
    const useHttps = process.env.USE_HTTPS_ON_LOCALHOST == 'true';
    if (useHttps) {
        return await setupHttps();
    } else {
        return await NestFactory.create(AppModule);
    }
}

async function setupHttps() {
    const paths = {
        key: __dirname + '/ssl/cert.key', // Adjusted for simplicity
        cert: __dirname + '/ssl/cert.crt', // Adjusted for simplicity
    };

    if (!fs.existsSync(paths.key) || !fs.existsSync(paths.cert)) {
        throw new Error('SSL certificates not found');
    }

    const httpsOptions = {
        key: fs.readFileSync(paths.key),
        cert: fs.readFileSync(paths.cert),
    };

    return await NestFactory.create(AppModule, {httpsOptions});
}


bootstrap();

