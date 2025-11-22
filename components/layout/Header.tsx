import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import LayoutSideSpace from "./LayoutSideSpace";
import Input from "../common/Input";
import { PopoverDemo } from "../common/Popover";
import { User, User2, UserCircle2Icon } from "lucide-react";
import { TbCategory } from "react-icons/tb";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

function Header() {
  return (
    <header className="w-full h-20 mt-0 bg-white flex border-b-2 flex-row-reverse items-center 4 ">
      <LayoutSideSpace>
        <div className=" flex w-full m-auto h-16 items-center   bg-white justify-between">
          <div className="flex flex-1 ">
            <span className="font-bold">Exclusive</span>
          </div>
          <div className="lg:flex flex-1 hidden ">
            {/* // TODO use map for header links (maps need key don't forget*/}
            <ul className="flex space-x-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-1 items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 p-1">
            {/* // TODO make this a component props should get icon */}
            {/* <IconInput ... leftIcon={} rightIcon={}/> */}
            <Input
              style="h-9
md:flex bg-slate-100 rounded-l hidden  mr-1 p-2 "
              inputStyle="bg-slate-100 h-full focus-visible:outline-none p-2"
              placeholderText="What are you looking for?"
            >
              <FiSearch size={22} />
            </Input>
            <button>
              <IoMdHeartEmpty size={32} />
            </button>
            <Link href={"/cart"}>
              <AiOutlineShoppingCart size={32} />
            </Link>
            <PopoverDemo
              Trigger={<UserCircle2Icon size={30} />}
              label1={
                <div className="flex gap-2 items-center ">
                  <User size={20} />
                  <Link className="text-sm " href={"/myAccount"}>
                    <p className="flex "> Manage My Account</p>
                  </Link>
                </div>
              }
              label2={
                <div className="flex gap-2">
                  <TbCategory size={20} />
                  <Link className="text-sm" href={"/myAccount"}>
                    <p className="flex"> My Order</p>
                  </Link>
                </div>
              }
              label3={
                <div className="flex gap-2">
                  <IoCloseCircleOutline size={20} />{" "}
                  <Link className="text-sm" href={"/myAccount"}>
                    <p className="flex"> My Cancellations</p>
                  </Link>
                </div>
              }
              label4={
                <div className="flex gap-2">
                  <FaRegStar size={20} />
                  <Link className="text-sm" href={"/myAccount"}>
                    <p className="flex"> My Reviews</p>
                  </Link>
                </div>
              }
              label5={
                <div className="flex gap-2">
                  <BiLogOut size={20} />{" "}
                  <Link className="text-sm" href={"/myAccount"}>
                    <p className="flex "> Logout</p>
                  </Link>
                </div>
              }
            />
          </div>
        </div>
      </LayoutSideSpace>
    </header>
  );
}

export default Header;
