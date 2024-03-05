// src/products/interfaces/base.product.interface.ts

import { Document } from "mongoose";
import { ProductCategory } from "../constants/product.categories";

export interface BaseProduct extends Document {
  name: string;
  description: string;
  picture: string;
  category: ProductCategory;
  price: number;
  quantity: number;
}
