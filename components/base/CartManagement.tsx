"use client";
import React, { useEffect, useState } from "react";
import LayoutSideSpace from "../layout/LayoutSideSpace";
import { BreadcrumbCustom } from "../common/BreadCrumb";
import TableDemo from "../common/Table";
import Image from "next/image";
import LED from "../../app/assets/image/LED.png";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

const serverCardData = [
  {
    product: {
      price: 120000,
      name: "TV",
      image: <Image src={LED} alt="LED" />,
    },
    count: 1,
  },
  {
    product: {
      price: 120000,
      name: "Box",
      image: <Image src={LED} alt="LED Image" />,
    },
    count: 1,
  },
];

const CartBreadcrumbArray = [
  { title: "Home", href: "./" },
  { title: "cart", href: "/cart" },
];
let sum = 0;
function CartManagement() {
  const [list, setList] = useState([{}]);

  const getList = () => {
    const map = serverCardData.map((event) => {
      return {
        product: (
          <div className="flex ">
            <div className="flex items-end">{event.product.name}</div>{" "}
            <div className="flex items-end">{event.product.image}</div>
          </div>
        ),
        price: event.product.price,
        Quantity: (
          <input
            className="w-[50px] h-[30px] border p-1"
            type="number"
            placeholder={event.count}
          />
        ),
        Subtotal: event.product.price,
      };
    });
    setList(map);
  };
  useEffect(() => {
    getList();
  }, []);
  // list.forEach(myFunction);
  // function myFunction(item: any) {
  //   sum += item.price;
  // }
  return (
    <div>
      <LayoutSideSpace>
        <div className="p-14">
          <div className="mb-10">
            <BreadcrumbCustom itemsList={CartBreadcrumbArray} />
          </div>

          <TableDemo
            columns={["product", "price", "Quantity", "Subtotal"]}
            list={list}
          />

          <div className="flex justify-between mt-2 mb-16">
            {" "}
            <Button variant="outline">Outline</Button>
            <Button variant="outline">Outline</Button>
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[50%] flex gap-4">
              <Input className="w-[40%]" placeholder="Coupon Code" />
              <Button className="bg-red-500">Apply Coupon</Button>
            </div>
            <div className="w-[40%] h-[350px] border space-y-10 p-2 rounded-lg">
              <span className="font-bold text-lg">Cart Total</span>
              <div className="border-b flex justify-between items-center">
                <p>Subtotal:</p>
                <p>{sum}</p>
              </div>
              <div className="border-b flex justify-between">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between ">
                <p>Total:</p>
                <p>$1750</p>
              </div>
              <div className="flex justify-center ">
                <Link href={"/checkout"}>
                  <Button className="bg-red-500">Procees to checkout</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </LayoutSideSpace>
    </div>
  );
}

export default CartManagement;
