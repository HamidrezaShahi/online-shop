import React, { useState } from "react";
import { SelectMenu } from "../common/SelectMenu";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface AddProductProps {
  onSubmit: (data: any) => void;
  editObject: any;
}
function AddProduct({ onSubmit, editObject = {} }: AddProductProps) {
  const [data, setData] = useState<any>(editObject);
  const [categories, setCategories] = useState<any>(editObject);
  const [Specifications, setSpecifications] = useState([{}]);
  function chang(e: React.ChangeEvent<HTMLInputElement>) {
    const copy = { ...data };
    copy[e.target.name] = e.target.value;
    setData(copy);
  }
  function categoryChang(newValue: any) {
    setCategories(newValue);
  }
  function SpecificationsF(e: any) {
    console.log(e.target.checked, e.target.value);

    // setSpecifications(e);
  }
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
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">
          price
        </Label>
        <Input
          name="price"
          value={data.price}
          onChange={chang}
          type="number"
          className="col-span-3"
        />
      </div>
      <div className="flex flex-col flex-1 mt-24 space-y-20">
        <SelectMenu
          value={data}
          items={Specifications}
          onChange={categoryChang}
        />

        <div className=" flex flex-col space-y-5">
          <h1>Specifications</h1>
          {/* <CheckboxDemo clickF={SpecificationsF} label="Household appliances" /> */}
          {/*<CheckboxDemo clickF={SpecificationsF} label="clothes" /> */}
          {/*<CheckboxDemo
          clickF={SpecificationsF}
          label="Electronic appliances"
        /> */}
        </div>
      </div>
      <Button onClick={() => onSubmit({ ...data })}>Save changes</Button>
    </div>
  );
}

export default AddProduct;
