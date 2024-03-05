// src/products/interfaces/order.product.interface.ts

import { BaseProduct } from "./base.product.interface";

export interface OrderProduct extends BaseProduct {
  customer: string;
  date: Date;
  status: string;
}
