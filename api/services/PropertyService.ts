import { Property } from "../models/Property";
import { PropertyRepository } from "../repository/PropertyRepository";

const getProperties = async () => {
  const response = await PropertyRepository.getProperties();

  return response;
};

export const getPropertyById = async (id: string) => {
  const response = await PropertyRepository.getPropertyById(id);

  return response;
};

export const getPropertyByPropertyTypeId = async (PropertyTypeId: string) => {
  const response = await PropertyRepository.getPropertyById(PropertyTypeId);

  return response;
};

export const updateProperty = async (data: any) => {
  const updateProperty: Property = {
    name: data.name,
    _id: data._id,
    propertyTypeId: data.propertyTypeId,
  };

  const response = await PropertyRepository.updateProperty(updateProperty);

  return response;
};
export const addProperty = async (data: any) => {
  const updateProperty: Property = {
    name: data.name,
    _id: data._id,
    propertyTypeId: data.propertyTypeId,
  };

  const response = await PropertyRepository.addProperty(updateProperty);

  return response;
};

export const deleteProperty = async (id: string) => {
  const response = await PropertyRepository.deleteProperty(id);

  return response;
};

export const PropertyService = {
  getProperties,
  getPropertyById,
  getPropertyByPropertyTypeId,
  updateProperty,
  addProperty,
  deleteProperty,
};
