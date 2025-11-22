"use client";
import { Copy } from "lucide-react";
import React, { useState } from "react";
import Inputs from "./Inputs";
import { Button } from "../ui/button";
interface props {
  onSub: (newValue: object) => void;
}
function MyAccountForm({ onSub }: props) {
  const [form, setForm] = useState({});
  function onChange(e: any) {
    // console.log(" -=-=-=- ", e.target, e.target.name, e.target.value);

    let copy = { ...form };
    copy[e.target.name] = e.target.value;
    console.log(e.target.name, copy);

    setForm(copy);
  }
  const onSubmit = (e) => {
    // e.preventDefault();
    console.log(e.data, e.formData);
    const data = new FormData(e);
    console.log(data);

    onSub({ ...form });
  };
  return (
    <form
      action={onSubmit}
      className=" shadow-lg rounded-lg flex flex-col  space-y-10 w-full "
    >
      {/* <div className="flex">
        <label>First name</label>
        <input
          placeholder="your name"
          name="name"
          // value={form.name}
          // onChange={onChange}
        />
        <input placeholder="Last" name="lastName" />
      </div> */}

      <div className="space-y-5 p-8 ">
        <h2 className="text-red-400 font-semibold">Edit Your Profile</h2>
        <div className="flex gap-7">
          <div className="flex flex-col">
            <label>FirstName</label>{" "}
            <input className="border h-11 shadow-md rounded-md" />
          </div>
          <div className="flex flex-col">
            <label>lastName</label>{" "}
            <input className="border h-11 shadow-md rounded-md" />
          </div>
        </div>
        <div className="flex gap-7">
          <div className="flex flex-col">
            <label>Email</label>{" "}
            <input className="border h-11 shadow-md rounded-md" />
          </div>
          <div className="flex flex-col">
            <label>Address</label>{" "}
            <input className="border h-11 shadow-md rounded-md" />
          </div>
        </div>
        <div className="flex gap-7 w-full">
          <div className="flex flex-col space-y-5">
            <label>Password Changes</label>{" "}
            <input
              className="border h-11 shadow-md rounded-md w-[425px]"
              placeholder="Current Password"
            />
            <input
              className="border h-11 shadow-md rounded-md w-[425px]"
              placeholder="New password"
            />
            <input
              className="border h-11 shadow-md rounded-md w-[425px]"
              placeholder="Confirm New Password"
            />
          </div>
        </div>

        <div
          className=" flex justify-end gap-2
        "
        >
          <button className="bg-transparent">Cannel</button>
          <Button className="bg-red-500  " type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default MyAccountForm;
