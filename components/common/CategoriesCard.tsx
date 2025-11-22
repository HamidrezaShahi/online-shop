import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import Link from "next/link";
import { HorizontalList } from "./HorizontalList";

const categories = [
  { name: "phone", icon: <IoIosPhonePortrait size={52} /> },
  { name: "computer", icon: <HiOutlineDesktopComputer size={52} /> },
  { name: "smartWatch", icon: <BsSmartwatch size={52} /> },
  { name: "headPhones", icon: <CiHeadphones size={52} /> },
  { name: "gaming", icon: <IoGameControllerOutline size={52} /> },
  { name: "camera", icon: <IoCameraOutline size={52} /> },
];

function CategoriesCard() {
  return (
    <div className="flex justify-between mt-[60px]">
      <HorizontalList
        key="discount-day"
        list={categories.map((event) => {
          // TODO Add keys
          return (
            <Link href="/">
              <div className="w-[170px] h-[145px] rounded-[4px] border-2 hover:bg-red-500 hover:text-white space-y-4 flex flex-col items-center justify-center">
                <div>{event.icon}</div>
                <div>{event.name}</div>
              </div>
            </Link>
          );
        })}
      ></HorizontalList>
    </div>
  );
}

export default CategoriesCard;
