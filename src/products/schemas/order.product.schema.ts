// src/products/schemas/order.product.schema.ts
import { Schema } from "mongoose";
import { BaseProductSchema } from "./base.product.schema";

export const OrderProductSchema = new Schema({
  customer: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true, enum: ['pending', 'completed', 'cancelled'] },
}).add(BaseProductSchema);
