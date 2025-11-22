import { ObjectId } from "mongodb";

export interface ProductType {
  name: string;
  _id: string;
  propertyTypeList: ObjectId[];
}
