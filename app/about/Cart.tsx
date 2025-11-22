import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";

const achivements = [
  {
    title: "Monthly Sale Store Count",
    value: "2.5M",
    icon: <BsShopWindow size={20} />,
  },
  { title: "Total Sales", value: "12.5B", icon: <AiOutlineDollar /> },
  { title: "Total Customers", value: "250K", icon: <FaBagShopping /> },
  { title: "Average Order Value", value: "$120", icon: <FaSackDollar /> },
  { title: "Total Orders", value: "1.5M", icon: "2.2M" },
  { title: "Total Revenue", value: "$1.5B", icon: "$2.2B" },
];
function Cart() {
  return (
    <div className="flex py-36 justify-around">
      {achivements.splice(0, 4).map((e, index) => {
        return (
          <div
            key={e.title + index}
            className="w-[240px] h-[200px] hover:bg-red-500 hover:text-white flex flex-col justify-center items-center   border"
          >
            <div className="rounded-[50%] text-white bg-black text-center w-8 h-8 border">
              {" "}
              {e.icon}
            </div>
            <div> {e.value}</div>
            <div>{e.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
