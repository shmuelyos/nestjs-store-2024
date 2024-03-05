import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

type ProductSchema = Product & Document;

 enum Category {
  Electronics,
  Collectibles_Art,
  Home_Garden,
  Clothing_Shoes_Accessories,
  Toys_Hobbies,
  Sporting_Goods,
  Books_Movies_Music,
  Health_Beauty,
  Business_Industrial,
  Jewelry_Watches,
  Baby_Essentials,
  Pet_Supplies,
  Food_Drinks,
}

 enum State {
  Shelf,
  Basket,
  Ordered,
  Completed,
}

@Schema()
 class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  picture: string;

  @Prop({ required: true, enum: Object.values(Category) })
  category: Category;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true, enum: Object.values(State) })
  state: State;

  @Prop()
  customer?: string;

  @Prop()
  date?: Date;
}

 const ProductSchema = SchemaFactory.createForClass(Product);
