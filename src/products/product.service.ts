// src/products/product.service.ts
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BasketProduct } from "./interfaces/basket.product.interface";
import { OrderProduct } from "./interfaces/order.product.interface";
import { ShelfProduct } from "./interfaces/shelf.product.interface";


@Injectable()
export class ProductService {
  constructor(
    @InjectModel("BasketProduct") private basketProductModel: Model<BasketProduct>,
    @InjectModel("OrderProduct") private orderProductModel: Model<OrderProduct>,
    @InjectModel("ShelfProduct") private shelfProductModel: Model<ShelfProduct>
  ) {
  }

  getShelfProducts() {
    return this.shelfProductModel.find().exec();
  }

  getBasketProducts(email) {
    return this.basketProductModel.find({ customer: email }).exec();
  }

  getOrderProducts(email) {
    return this.orderProductModel.find({ customer: email }).exec();
  }

  async addToBasket(email, product) {
    const filter = { _id: product._id, customer: email };
    const update = { $set: product };
    const options = { new: true, upsert: true }; // Create a new one if it doesn't exist
    return this.basketProductModel.findOneAndUpdate(filter, update, options);
  }

  async removeFromBasket(email, _id: string) {
    const filter = { _id:_id, customer: email };
    return this.basketProductModel.findOneAndDelete(filter)
  }
  async testShelfProducts() {
    try {

      const testArray = [{
        "_id": {
          "$oid": "65564cf41b4f1457554e5426"
        },
        "name": "Pizza Margherita",
        "description": "Classic Margherita pizza with tomato, mozzarella, and basil",
        "picture": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category": "Food_Drinks",
        "price": 12.99,
        "quantity": 999,
        "state": "shelf",
        "__v": 0
      },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e5427"
          },
          "name": "Chicken Caesar Salad",
          "description": "Fresh salad with grilled chicken, romaine lettuce, croutons, and Caesar dressing",
          "picture": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 9.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e542a"
          },
          "name": "Grilled Salmon",
          "description": "Freshly grilled salmon fillet with lemon and herbs",
          "picture": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 16.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e542b"
          },
          "name": "Caprese Sandwich",
          "description": "Italian-style sandwich with mozzarella, tomato, basil, and balsamic glaze",
          "picture": "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 7.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e542c"
          },
          "name": "Chocolate Cake",
          "description": "Decadent chocolate cake with layers of rich chocolate ganache",
          "picture": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 19.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e542d"
          },
          "name": "Chicken Pad Thai",
          "description": "Stir-fried rice noodles with chicken, peanuts, and Thai spices",
          "picture": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 11.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e542e"
          },
          "name": "Fruit Smoothie Bowl",
          "description": "Healthy smoothie bowl with assorted fruits, granola, and yogurt",
          "picture": "https://plus.unsplash.com/premium_photo-1663840135654-b4119f34a720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 10.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e542f"
          },
          "name": "Mushroom Risotto",
          "description": "Creamy risotto with assorted mushrooms and Parmesan cheese",
          "picture": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 13.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e5428"
          },
          "name": "Spaghetti Bolognese",
          "description": "Spaghetti pasta with savory Bolognese sauce and Parmesan cheese",
          "picture": "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 14.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        },
        {
          "_id": {
            "$oid": "65564cf41b4f1457554e5429"
          },
          "name": "Vegetarian Sushi Roll",
          "description": "Sushi roll with avocado, cucumber, and carrot",
          "picture": "https://images.unsplash.com/photo-1602554171817-8467dd4310d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "category": "Food_Drinks",
          "price": 8.99,
          "quantity": 999,
          "state": "shelf",
          "__v": 0
        }];

      for await (const p of testArray) {

        delete p._id;
        delete p.__v;
        delete p.state;

        await (new this.shelfProductModel(p)).save();
      }
    } catch (error) {
      throw new BadRequestException(`Error on creating a new Product: ${error.message}`);
    }

  }


}
