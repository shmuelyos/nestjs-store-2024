import {Controller, Delete, Get, Param, Post, Req, UseGuards} from "@nestjs/common";
import {AuthenticatedGuard, AuthenticatedGuard_EmptyArray} from "../auth/auth.guard";
import {ProductService} from "../products/product.service";

@Controller("order")
export class OrderController {

    constructor(private readonly productService: ProductService) {
    }

    @UseGuards(AuthenticatedGuard_EmptyArray)
    @Get()
    getAllOrders(@Req() req) {
        return this.productService.getAllOrders(req.session.email)
    }

    @UseGuards(AuthenticatedGuard)
    @Get(':orderNumber')
    getOrderProducts(@Req() req, @Param('orderNumber') orderNumber: number) {
        return this.productService.getOrderProducts(req.session.email, orderNumber);
    }

    @UseGuards(AuthenticatedGuard)
    @Post()
    createNewOrder(@Req() req) {
        return this.productService.createNewOrder(req.session.email);
    }

    @UseGuards(AuthenticatedGuard)
    @Delete(':orderNumber')
    requestOrderCancellation(@Req() req, @Param('orderNumber') orderNumber: number) {
        return this.productService.requestOrderCancellation(req.session.email, orderNumber);
    }
}