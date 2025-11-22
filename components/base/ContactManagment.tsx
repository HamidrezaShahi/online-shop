import React from "react";
import LayoutSideSpace from "../layout/LayoutSideSpace";
import { BreadcrumbCustom } from "../common/BreadCrumb";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
const ContactBreadcrumbArray = [
  { title: "Home", href: "./" },
  { title: "contact", href: "/contact" },
];
function ContactManagment() {
  return (
    <div>
      <LayoutSideSpace>
        <div className="flex mt-4"></div>

        <BreadcrumbCustom itemsList={ContactBreadcrumbArray} />
        <div className="w-full block md:flex py-7 gap-12">
          <div className="w-full md:w-[25%] shadow-md pt-[20px] px-[35px]">
            <div className="h-[150px] space-y-4 border-b">
              <div className="flex gap-5">
                <IoCall size={25} />
                <span>Call To Us</span>
              </div>
              <div className="block space-y-3  ">
                <p className="text-xs">We are available 24/7, 7 days a week.</p>
                <p className="text-xs">Phone: +8801611112222</p>
              </div>
            </div>
            <div className="pt-4 space-y-4">
              <div className="flex gap-5">
                <MdOutlineMail size={25} />
                <span>Write To US</span>
              </div>
              <div className="block space-y-3  ">
                <p className="text-xs">
                  Fill out our form and we will contact you within 24 hours.{" "}
                </p>
                <p className="text-xs">Emails: customer@exclusive.com</p>
                <p className="text-xs">Emails: support@exclusive.com</p>
              </div>
            </div>
            {/* <div className="h-[150px]"></div> */}
          </div>
          <div className="w-full md:w-[75%] shadow-md p-10  flex flex-col space-y-10">
            <div className=" mt-5 md:mt-0 w-full flex flex-col md:flex-row flex-wrap gap-2 md:space-x-5 items-center justify-center">
              <input
                className=" h-10  rounded-md  px-3 bg-slate-100"
                placeholder="your name"
              />
              <input
                className="   h-10 px-3 rounded-md bg-slate-100"
                placeholder="your email"
              />
              <input
                className=" h-10 px-3 rounded-md bg-slate-100"
                placeholder="your phone"
              />
            </div>
            <div className=" w-full">
              <input
                placeholder="your message"
                className="w-full h-[250px] rounded-md bg-slate-100 px-3"
              />
            </div>
            <div className="flex flex-row-reverse">
              <button className="w-36 h-12 text-white bg-red-500 rounded-md">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </LayoutSideSpace>
    </div>
  );
}

export default ContactManagment;
