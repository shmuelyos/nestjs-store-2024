// src/products/schemas/shelf.product.schema.ts
import { Schema } from "mongoose";
import { BaseProductSchema } from "./base.product.schema";

export const ShelfProductSchema = new Schema({  }).add(BaseProductSchema);
