// src/products/interfaces/basket.product.interface.ts

import {BaseProduct} from "./base.product.interface";

export interface BasketProduct extends BaseProduct {
    customer: string;
}
