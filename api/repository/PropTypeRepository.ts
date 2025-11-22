import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { PropertyType } from "../models/PropertyType";
import { ErrorType } from "../models/ErrorType";

export const addPropertyType = async (propertyType: PropertyType) => {
  try {
    const client = await clientPromise;

    const database = client.db("e-commerce");

    const collection = database.collection("prop-type");

    const insert = await collection.insertOne({
      ...propertyType,
      _id: new ObjectId(),
    });
    return insert;
  } catch (error) {
    return error;
  }
};

export const getPropertyTypeById = async (id: string) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("prop-type");
    const query = { _id: ObjectId.createFromHexString(id) };
    const propertyType = await collection.findOne(query);

    return propertyType;
  } catch (error) {
    return error;
  }
};
export const getPropertyTypes = async (): Promise<
  PropertyType[] | ErrorType
> => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection<PropertyType>("prop-type");
    const propertyType = await collection.find({}).toArray();
    console.log(propertyType);

    return propertyType;
  } catch (error) {
    return {
      error,
      message: "Something went wrong",
      location: "getPropertyTypesRepo",
    };
  }
};
export const deletePropertyType = async (id: string) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("prop-type");
    const query = { _id: ObjectId.createFromHexString(id) };
    const propertyType = await collection.deleteOne(query);

    return propertyType;
  } catch (error) {
    return error;
  }
};
export const updatePropertyType = async (propertyType: PropertyType) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("prop-type");
    const query = { _id: ObjectId.createFromHexString(propertyType._id) };
    const updateDoc = {
      $set: {
        name: propertyType.name,
      },
    };
    const propertyTypeUpdated = await collection.updateOne(query, updateDoc);

    return propertyTypeUpdated;
  } catch (error) {
    return error;
  }
};
export const PropertyTypeRepository = {
  getPropertyTypes,
  getPropertyTypeById,
  addPropertyType,
  deletePropertyType,
  updatePropertyType,
};
