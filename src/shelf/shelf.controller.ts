import {Controller, Get} from "@nestjs/common";
import {ProductService} from "../products/product.service";


@Controller("shelf")
export class ShelfController {
    constructor(private readonly productService: ProductService) {
    }

    @Get()
    getShelfProducts() {
        return this.productService.getShelfProducts();
    }


}