import {Module} from "@nestjs/common";
import {BasketController} from "./basket.controller";
import {ProductService} from "../products/product.service";
import {MongooseModule} from "@nestjs/mongoose";
import {BasketProductSchema} from "../products/schemas/basket.product.schema";
import {OrderProductSchema} from "../products/schemas/order.product.schema";
import {ShelfProductSchema} from "../products/schemas/shelf.product.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'BasketProduct', schema: BasketProductSchema, collection: 'basketProducts'},
            {name: 'OrderProduct', schema: OrderProductSchema, collection: 'orderProducts'},
            {name: 'ShelfProduct', schema: ShelfProductSchema, collection: 'shelfProducts'},
        ]),
    ],
    providers: [ProductService],
    controllers: [BasketController]
})
export class BasketModule {
}