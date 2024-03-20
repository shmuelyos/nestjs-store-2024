// src/products/schemas/basket.product.schema.ts
import {Schema} from "mongoose";
import {BaseProductSchema} from "./base.product.schema";

export const BasketProductSchema = new Schema({
    customer: {type: String, required: true},
}).add(BaseProductSchema);
