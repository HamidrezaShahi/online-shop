import { ErrorType } from "../models/ErrorType";
import { ProductType } from "../models/ProductType";
import { ProductTypeRepository } from "../repository/ProductTypeRepository";

const getProductTypes = async (): Promise<ProductType[] | ErrorType> => {
  const response = await ProductTypeRepository.getProductTypes();

  return response;
};

export const getProductTypeById = async (id: string) => {
  const response = await ProductTypeRepository.getProductTypeById(id);

  return response;
};

export const getProductTypeByPropertyTypeId = async (
  PropertyTypeId: string
) => {
  const response = await ProductTypeRepository.getProductTypeById(
    PropertyTypeId
  );

  return response;
};

export const updateProductType = async (data: any) => {
  const updateProductType: ProductType = {
    name: data.name,
    _id: data._id,
    propertyTypeList: data.propertyTypeList,
  };

  const response = await ProductTypeRepository.updateProductType(
    updateProductType
  );

  return response;
};

export const addProductType = async (data: any) => {
  const updateProductType: ProductType = {
    name: data.name,
    _id: data._id,
    propertyTypeList: data.propertyTypeList,
  };

  const response = await ProductTypeRepository.addProductType(
    updateProductType
  );

  return response;
};

export const deleteProductType = async (id: string) => {
  const response = await ProductTypeRepository.deleteProductType(id);

  return response;
};

export const ProductTypeService = {
  getProductTypes,
  getProductTypeById,
  getProductTypeByPropertyTypeId,
  updateProductType,
  addProductType,
  deleteProductType,
};
