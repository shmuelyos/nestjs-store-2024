// src/products/interfaces/order.product.interface.ts

import {BaseProduct} from "./base.product.interface";
import {OrderStatus} from "../constants/order.status";

export interface OrderProduct extends BaseProduct {
    customer: string;
    orderNumber: number;
    status: OrderStatus;
}
