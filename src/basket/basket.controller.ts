import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from "@nestjs/common";
import {AuthenticatedGuard, AuthenticatedGuard_EmptyArray} from "../auth/auth.guard";
import {ProductService} from "../products/product.service";
import {BaseProduct} from "../products/interfaces/base.product.interface";

@Controller("basket")
export class BasketController {
    constructor(private readonly productService: ProductService) {
    }

    @UseGuards(AuthenticatedGuard_EmptyArray)
    @Get()
    getBasketProducts(@Req() req) {
        return this.productService.getBasketProducts(req.session.email);
    }

    @UseGuards(AuthenticatedGuard)
    @Post()
    addToBasket(@Req() req, @Body() product: BaseProduct) {
        return this.productService.addToBasket(req.session.email, product);
    }

    @UseGuards(AuthenticatedGuard)
    @Delete(':_id')
    removeFromBasket(@Req() req, @Param('_id') _id: string) {
        return this.productService.removeFromBasket(req.session.email, _id);
    }

}