// src/products/schemas/base.product.schema.ts
import mongoose from "mongoose";
import { ProductCategory } from "../constants/product.categories";

export const BaseProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  category: { type: String, enum: Object.values(ProductCategory), required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
}, { timestamps: true });

