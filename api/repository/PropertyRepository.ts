import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Property } from "../models/Property";
import { ErrorType } from "../models/ErrorType";

export const addProperty = async (property: Property) => {
  try {
    const client = await clientPromise;

    const database = client.db("e-commerce");

    const collection = database.collection("property");

    const insert = await collection.insertOne({
      ...property,
      _id: new ObjectId(),
    });
    return insert;
  } catch (error) {
    return error;
  }
};

export const getPropertyById = async (id: string) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("property");
    const query = { _id: ObjectId.createFromHexString(id) };
    const property = await collection.findOne(query);

    return property;
  } catch (error) {
    return error;
  }
};

export const getProperties = async (): Promise<Property[] | ErrorType> => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection<Property>("property");
    const property = await collection.find({}).toArray();
    console.log(property);

    return property;
  } catch (error) {
    return {
      error,
      message: "Something went wrong",
      location: "getPropertiesRepo",
    };
  }
};

export const deleteProperty = async (id: string) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("property");
    const query = { _id: ObjectId.createFromHexString(id) };
    const property = await collection.deleteOne(query);

    return property;
  } catch (error) {
    return error;
  }
};

export const updateProperty = async (property: Property) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("property");
    const query = { _id: ObjectId.createFromHexString(property._id) };
    const updateDoc = {
      $set: {
        name: property.name,
      },
    };
    const propertyUpdated = await collection.updateOne(query, updateDoc);

    return propertyUpdated;
  } catch (error) {
    return error;
  }
};

export const PropertyRepository = {
  getProperties,
  getPropertyById,
  addProperty,
  deleteProperty,
  updateProperty,
};
