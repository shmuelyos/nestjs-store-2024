import { Body, Controller, Delete, Get, Post, Req, UseGuards } from "@nestjs/common";
import { ProductService } from "./product.service";
import { AuthenticatedGuard } from "../auth/auth.guard";
import { BaseProduct } from "./interfaces/base.product.interface";

@Controller("product")
export class ProductController {

  constructor(private readonly productService: ProductService) {
  }

  @Get("get-shelf")
  getShelfProducts() {
    return this.productService.getShelfProducts();
  }
  @UseGuards(AuthenticatedGuard)
  @Get("get-basket")
  getBasketProducts(@Req() req) {
    return this.productService.getBasketProducts(req.session.email);
  }


  @UseGuards(AuthenticatedGuard)
  @Get("get-orders")
  getOrderProducts(@Req() req) {
    return this.productService.getOrderProducts(req.session.email);
  }

  @UseGuards(AuthenticatedGuard)
  @Get("test-shelf-products")
  testShelfProducts() {
    return this.productService.testShelfProducts();
  }


  @UseGuards(AuthenticatedGuard)
  @Post("add-to-basket")
  addToBasket(@Req() req, @Body() product: BaseProduct) {
    return this.productService.addToBasket(req.session.email, product);
  }

  @UseGuards(AuthenticatedGuard)
  @Delete("remove-from-basket")
  removeFromBasket(@Req() req, @Body() _id: string) {
    return this.productService.removeFromBasket(req.session.email, _id);
  }

}
