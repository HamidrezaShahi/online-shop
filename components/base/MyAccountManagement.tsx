"use client";
import React, { useState } from "react";
import LayoutSideSpace from "../layout/LayoutSideSpace";
import { BreadcrumbCustom } from "../common/BreadCrumb";
import Link from "next/link";
import MyAccountForm from "../common/MyAccountForm";
const MyAccountBreadcrumbArray = [
  { title: "Home", href: "./" },
  { title: "myAccount", href: "/myAccount" },
];

function MyAccountManagement() {
  const [name, setName] = useState(false);
  const [changName, setChangName] = useState();
  function click(newValue: any) {
    console.log(newValue);
    if (newValue?.name) setChangName(newValue?.name);
  }
  return (
    <div>
      <LayoutSideSpace>
        <div className="flex justify-between pt-6">
          <BreadcrumbCustom itemsList={MyAccountBreadcrumbArray} />
          <span className="pr-12">Welcome+{changName}</span>
        </div>
        <div className="flex mt-8 gap-x-10     ">
          <div className="">
            <div className="">
              <h2 className="flex flex-col gap-2">
                Manage My Account{" "}
                <p className="text-gray-400 text-sm">
                  {" "}
                  <Link href={"./"}>My Profile</Link>
                </p>{" "}
                <p className="text-gray-400 text-sm">
                  <Link href={"./"}>Address Book</Link>
                </p>
                <p className="text-gray-400 text-sm">
                  <Link href={"./"}>My Payment Options</Link>
                </p>
              </h2>
            </div>
            <div className="">
              <h2 className="flex flex-col gap-2 mt-3">
                My Orders{" "}
                <p className="text-gray-400 text-sm">
                  <Link href={"./"}>My Returns</Link>
                </p>{" "}
                <p className="text-gray-400 text-sm">
                  <Link href={"./"}>My Cancellations</Link>
                </p>
              </h2>
              <h2 className="flex flex-col gap-2 mt-3">My Wishlist</h2>
            </div>
          </div>
          <div className="m-auto">
            <MyAccountForm onSub={click} />
          </div>
        </div>
      </LayoutSideSpace>
    </div>
  );
}

export default MyAccountManagement;
