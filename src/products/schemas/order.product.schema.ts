// src/products/schemas/order.product.schema.ts
import {Schema} from "mongoose";
import {BaseProductSchema} from "./base.product.schema";
import {OrderStatus} from "../constants/order.status";

export const OrderProductSchema = new Schema({
    customer: {type: String, required: true},
    date: {type: Date, required: true},
    status: {type: String, required: true, enum: Object.values(OrderStatus)},
    orderNumber: {type: Number, required: true}
}).add(BaseProductSchema);
