import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { ProductType } from "../models/ProductType";
import { ErrorType } from "../models/ErrorType";

export const addProductType = async (productType: ProductType) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("product-type");
    const insert = await collection.insertOne({
      ...productType,
      _id: new ObjectId(),
    });
    return insert;
  } catch (error) {
    return error;
  }
};

export const getProductTypeById = async (id: string) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("product-type");
    const query = { _id: ObjectId.createFromHexString(id) };
    const productType = await collection.findOne(query);
    return productType;
  } catch (error) {
    return error;
  }
};

export const getProductTypes = async (): Promise<ProductType[] | ErrorType> => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection<ProductType>("product-type");
    const productTypes = await collection.find({}).toArray();
    return productTypes;
  } catch (error) {
    return {
      error,
      message: "Something went wrong",
      location: "getProductTypesRepo",
    };
  }
};

export const deleteProductType = async (id: string) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("product-type");
    const query = { _id: ObjectId.createFromHexString(id) };
    const productType = await collection.deleteOne(query);
    return productType;
  } catch (error) {
    return error;
  }
};

export const updateProductType = async (productType: ProductType) => {
  try {
    const client = await clientPromise;
    const database = client.db("e-commerce");
    const collection = database.collection("product-type");
    const query = { _id: ObjectId.createFromHexString(productType._id) };
    const updateDoc = {
      $set: {
        name: productType.name,
      },
    };
    const productTypeUpdated = await collection.updateOne(query, updateDoc);
    return productTypeUpdated;
  } catch (error) {
    return error;
  }
};

export const ProductTypeRepository = {
  getProductTypes,
  getProductTypeById,
  addProductType,
  deleteProductType,
  updateProductType,
};
