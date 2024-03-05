import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthenticatedGuard } from "../auth/auth.guard";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
constructor(private readonly userService: UserService){}

  @UseGuards(AuthenticatedGuard)
  @Get("get-user")
  getUser(@Req() req) {
    return this.userService.getUser(req.session.email);
  }
}
