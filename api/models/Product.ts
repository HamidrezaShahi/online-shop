import { ObjectId } from "mongodb";

export interface Product {
  name: string;
  _id: string;
  price: number;
  propertyList: string[];
}
