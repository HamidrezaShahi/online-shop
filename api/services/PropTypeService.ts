import { PropertyType } from "../models/PropertyType";
import { PropertyTypeRepository } from "../repository/PropTypeRepository";

const addPropertyType = async (data: any) => {
  const newPropertyType: PropertyType = {
    name: data.name,
    _id: data._id,
  };
  console.log(" created obj");

  const response = await PropertyTypeRepository.addPropertyType(
    newPropertyType
  );
  return response;
};
export const getPropertyTypes = async () => {
  const response = await PropertyTypeRepository.getPropertyTypes();
  return response;
};

export const getPropertyTypeById = async (id: string) => {
  const response = await PropertyTypeRepository.getPropertyTypeById(id);
  return response;
};

export const updatePropertyType = async (data: any) => {
  const updatePropertyType: PropertyType = {
    name: data.name,
    _id: data._id,
  };
  const response = await PropertyTypeRepository.updatePropertyType(
    updatePropertyType
  );
  return response;
};

export const deletePropertyType = async (id: string) => {
  const response = await PropertyTypeRepository.deletePropertyType(id);
  return response;
};

export const PropertyTypeService = {
  addPropertyType,
  getPropertyTypes,
  getPropertyTypeById,
  updatePropertyType,
  deletePropertyType,
};
