"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { CheckboxDemo } from "../common/CheckBox";
import { SelectMenu } from "../common/SelectMenu";
import { Button } from "../ui/button";
import axios from "axios";
interface AddPropertyProps {
  onsubmit: (data: any) => void;
  editObject: any;
}
function AddProperty({ onsubmit, editObject = {} }: AddPropertyProps) {
  const [data, setData] = useState<any>(editObject);
  const [selectedPropertyType, setSelectedPropertyType] =
    useState<string>(editObject);
  const [propertyTypeList, setPropertyTypeList] = useState([]);
  const getPropertyType = async () => {
    const getRequest = await axios.get("/api/v1/base/propType");
    setPropertyTypeList(getRequest.data.result);
  };
  useEffect(() => {
    getPropertyType();
  }, []);
  console.log("???????????", selectedPropertyType);
  console.log("/////////", propertyTypeList);

  function chang(e: React.ChangeEvent<HTMLInputElement>) {
    const copy = { ...data };
    copy[e.target.name] = e.target.value;
    setData(copy);
  }
  function categoryChang(newValue: any) {
    setSelectedPropertyType(newValue);
    console.log(newValue);
  }

  // setSpecifications(e);

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input
          onChange={chang}
          type="text"
          name="name"
          value={data.name}
          className="col-span-3"
        />
      </div>

      <div className="flex flex-col flex-1 mt-24 space-y-20">
        <SelectMenu
          value={selectedPropertyType}
          onChange={categoryChang}
          items={propertyTypeList}
        />
      </div>
      <Button
        onClick={() => {
          onsubmit({ ...data, propertyTypeId: selectedPropertyType });
        }}
      >
        Save changes
      </Button>
    </div>
  );
}

export default AddProperty;
