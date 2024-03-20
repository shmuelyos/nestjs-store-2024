import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {AuthModule} from "./auth/auth.module";
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {ProductsModule} from "./products/product.module";
import {BasketModule} from "./basket/basket.module";
import {ShelfModule} from "./shelf/shelf.module";
import {OrderModule} from "./order/order.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        MongooseModule.forRoot(process.env.MONGODB_URI),
        AuthModule,
        ProductsModule,
        ShelfModule,
        BasketModule,
        OrderModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
