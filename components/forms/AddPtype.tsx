"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
interface AddPtypeProps {
  onsubmit: (data: any) => void;
  editObject: any;
}

// TODO style issue
// TODO use form tag in all add forms
function AddPtype({ onsubmit, editObject = {} }: AddPtypeProps) {
  const [data, setData] = useState<any>(editObject);
  function chang(e: React.ChangeEvent<HTMLInputElement>) {
    const copy = { ...data };
    copy[e.target.name] = e.target.value;
    setData(copy);
  }

  return (
    <div>
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
      <Button onClick={() => onsubmit({ ...data })}>Save changes</Button>
    </div>
  );
}
export default AddPtype;
