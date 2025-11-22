"use client";
import React, { useState } from "react";
import LayoutSideSpace from "../layout/LayoutSideSpace";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Image from "next/image";
import { HeartIcon } from "lucide-react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import SectionsTitles from "../common/SectionsTitles";
import { originalProduct } from "../ProductHorizontalList";
import ProductCart from "../common/ProductCart";
import Product from "../../app/assets/image/product.png";
import Product1 from "../../app/assets/image/product-1.png";
import { title } from "process";
import { BreadcrumbCustom } from "../common/BreadCrumb";
import Link from "next/link";
const breadcrumbArray = [
  { title: "Home", href: "./" },
  { title: "product", href: "/product" },
];
function ProductManagement() {
  const [colorChang, setColorChang] = useState(0);
  const [number, setNumber] = useState(0);
  function color(index: number) {
    setColorChang(index);
  }
  function sizeColor(index: number) {
    setColorChang(index);
  }
  function plus() {
    setNumber(number + 1);
  }
  function minus() {
    setNumber(number - 1);
  }
  // TODO Fix styles and responsive
  return (
    <div>
      <LayoutSideSpace>
        <div className="flex">
          <BreadcrumbCustom itemsList={breadcrumbArray} />
        </div>

        <div className="w-[100%] block sm:flex gap-5 py-6">
          <div className="flex flex-col lg:flex-row-reverse gap-3">
            <Image src={Product} alt="product" />
            <div className="flex sm:flex-col gap-3 justify-between ">
              <Image src={Product1} alt="product-1" />
              <Image src={Product1} alt="product-1" />
              <Image src={Product1} alt="product-1" />
              <Image src={Product1} alt="product-1" />
            </div>
          </div>
          <div className="flex flex-col space-y-7 ">
            <h1>Havic HV G-92 Gamepad</h1>
            <br />
            <span>192.00</span>
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <hr />
            <div className="flex gap-2 ">
              <span>colors</span>
              <div
                onClick={() => color(6)}
                className={`${
                  colorChang == 6 ? "outline" : ""
                } rounded-full border bg-blue-600 border-white  w-6 h-6 aspect-auto gap-1 `}
              ></div>
              <div
                onClick={() => color(7)}
                className={`${
                  colorChang == 7 ? "outline" : ""
                } rounded-full border bg-red-500 border-white w-6 h-6  aspect-square`}
              ></div>
            </div>

            <div className="flex gap-5 ">
              <span className="font-semibold text-lg"> size :</span>
              <div
                onClick={() => sizeColor(1)}
                className={`${
                  colorChang == 1 ? "bg-red-500 text-white " : ""
                } w-10 flex items-center justify-center h-10  border`}
              >
                xs
              </div>
              <div
                onClick={() => sizeColor(2)}
                className={`${
                  colorChang == 2 ? "bg-red-500 text-white" : ""
                } w-10 flex items-center justify-center h-10  border`}
              >
                s
              </div>
              <div
                onClick={() => sizeColor(3)}
                className={`${
                  colorChang == 3 ? "bg-red-500 text-white" : ""
                } w-10 flex items-center justify-center h-10  border`}
              >
                m
              </div>
              <div
                onClick={() => sizeColor(4)}
                className={`${
                  colorChang == 4 ? "bg-red-500 text-white" : ""
                } w-10 flex items-center justify-center h-10  border`}
              >
                l
              </div>
              <div
                onClick={() => sizeColor(5)}
                className={`${
                  colorChang == 5 ? "bg-red-500 text-white" : ""
                } w-10 flex items-center justify-center h-10  border`}
              >
                xl
              </div>
            </div>
            <br />
            <div className="flex w-full h-[40px] ">
              <div className="flex w-[85%]  gap-4 ">
                <div className="flex border w-[50%] ">
                  <div className="w-full flex ">
                    <div
                      onClick={plus}
                      className="w-[15%]  font-bold text-lg  flex justify-center items-center border"
                    >
                      +
                    </div>
                    <div className="w-[70%] font-bold text-lg  flex justify-center items-center border text-center">
                      {number}
                    </div>
                    <div
                      onClick={minus}
                      className="w-[15%]  font-bold text-lg flex justify-center items-center border"
                    >
                      -
                    </div>
                  </div>
                </div>
                <Link
                  href={"/cart"}
                  className="w-[40%] flex items-center justify-center h-10 bg-red-400 rounded-lg text-white "
                >
                  <button className="">Bay</button>
                </Link>
              </div>
              <button className=" w-[10%] border bg-transparent rounded-md flex items-center justify-center">
                <HeartIcon />
              </button>
            </div>
            <div className="w-5/6 h-28  ">
              <div className="w-full h-2/4 border p-2 gap-5  flex">
                <CiDeliveryTruck size={35} />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">Free Delivery</p>
                  <p className="text-xs">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="w-full h-2/4 border p-2 flex gap-7 ">
                <TfiReload size={25} />
                <div className="flex flex-col">
                  <p className="text-sm font-medium">return Delivery</p>
                  <p className="text-xs">
                    Free 30 Days Delivery Returns. Details{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex">
          <SectionsTitles sectionName="Related Item" />
          {originalProduct.splice(1, 4).map((e) => {
            return (
              <ProductCart
                key={e.name + "-key"}
                label={e.name}
                off={e.offerPercentage}
                price={e.price}
              />
            );
          })}
        </div>
      </LayoutSideSpace>
    </div>
  );
}

export default ProductManagement;
