import { ObjectId } from "mongodb";

export interface Property {
  name: string;
  _id: string;
  propertyTypeId: ObjectId;
}
