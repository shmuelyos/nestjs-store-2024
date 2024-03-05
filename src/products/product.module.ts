// src/products/products.module.ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { BasketProductSchema } from "./schemas/basket.product.schema";
import { OrderProductSchema } from "./schemas/order.product.schema";
import { ShelfProductSchema } from "./schemas/shelf.product.schema"; // Assume you define this similarly

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'BasketProduct', schema: BasketProductSchema, collection: 'basketProducts' },
      { name: 'OrderProduct', schema: OrderProductSchema, collection: 'orderProducts' },
      { name: 'ShelfProduct', schema: ShelfProductSchema, collection: 'shelfProducts' },
    ]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductsModule {}
