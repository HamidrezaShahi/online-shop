"use client";
import React, { useState } from "react";
import LayoutSideSpace from "../layout/LayoutSideSpace";
import { BreadcrumbCustom } from "./BreadCrumb";
import Input from "./Input";
import { Checkbox } from "@/components/ui/checkbox";
import Img from "../../app/assets/image/LED.png";
import Image from "next/image";
import RadioButton from "./RadioButton";
import Image2 from "../../app/assets/image/Frame 834.png";
import { Button } from "@/components/ui/button";
import Inputs from "./Inputs";
const CheckOutBreadCrumbArray = [
  { title: "Home", href: "./" },
  { title: "product", href: "/product" },
  { title: "Cart", href: "/cart" },
  { title: "Checkout", href: "/checkout" },
];
const inputsArray = [
  "FirstName",
  "Company Name",
  "Street Address",
  "Apartment, floor, etc. (optional)",
  "Town/City",
  "Phone Number",
  "Email Address",
];

function CheckOutManagement() {
  const [coupon, setCoupon] = useState([
    { name: "H1 Gamepad", price: 650, img: { Img } },
    { name: "LCD monitor", price: 1200, img: { Img } },
    { Shipping: "free" },
  ]);
  const RadioButtonLabels = ["Bank", "Cash on delivery"];
  return (
    <div>
      <LayoutSideSpace>
        <BreadcrumbCustom itemsList={CheckOutBreadCrumbArray} />

        <h2 className="font-semibold text-xl mt-10">Billing Details</h2>
        <div className="flex w-full space-x-24">
          <div className="mt-10 flex flex-col w-[45%]  ">
            {inputsArray.map((event) => {
              return (
                <Input
                  inputStyle="w-[350px] h-10 border rounded-lg bg-grey-300 bg-gray-100 "
                  placeholderText=""
                  style="flex flex-col gap-4"
                  label={event}
                />
              );
            })}
            <div className="flex items-center space-x-2 py-8">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Save this information for faster check-out next time{" "}
              </label>
            </div>
          </div>
          <div className=" justify-center w-[35%]  mt-10 p-3  space-y-[32px]">
            <div className=" space-y-3">
              {coupon.map((e) => {
                return (
                  <div className="flex justify-between">
                    <div className="flex">
                      <Image src={e.img} alt="LED" /> <span>{e.name}</span>
                    </div>
                    <span>{e.price}</span>
                  </div>
                );
              })}

              {/* <div className="flex justify-between">
                <div className="flex">
                  <Image src={Img} alt="LED" />
                  <span>lED monitor</span>
                </div>
                <span>1200</span>
              </div> */}
            </div>
            <div className="">
              <div className="space-y-2 border-b flex justify-between">
                <span>Subtotal:</span>
                <span>{coupon[0].price + coupon[1].price}</span>
              </div>
              <div className="space-y-2 border-b flex justify-between">
                <span>Shipping:</span>
                <span>{coupon[2].Shipping}</span>
              </div>
              <div className="space-y-2 border-b flex justify-between">
                <span>Total:</span>
                <span>{coupon[0].price + coupon[1].price}</span>
              </div>
            </div>
            <div className="flex">
              <div>
                {RadioButtonLabels.map((e) => {
                  return (
                    <div>
                      <RadioButton label={e} />
                      <br />
                    </div>
                  );
                })}
              </div>
              <div>
                {" "}
                <Image src={Image2} alt="ssssss" />
              </div>
            </div>
            <div className="flex gap-6">
              {" "}
              <Input
                inputStyle="w-[220px] h-10 border rounded-lg bg-grey-300"
                placeholderText="Coupon Code"
                style=""
              />
              <Button className="bg-red-500"> Apply Coupon</Button>{" "}
            </div>
            <Button className="bg-red-500">Place Order</Button>
          </div>
        </div>
      </LayoutSideSpace>
    </div>
  );
}

export default CheckOutManagement;
