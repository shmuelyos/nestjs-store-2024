//auth.module
import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {GoogleStrategy} from './google.strategy';
import {UsersModule} from "../users/user.module";
import {AuthController} from "./auth.controller";


@Module({
    imports: [UsersModule],
    controllers: [AuthController],
    providers: [AuthService, GoogleStrategy],
})
export class AuthModule {
}
