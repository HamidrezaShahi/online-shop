import Link from "next/link";
import React from "react";
import OurStory from "./OurStory";
import LayoutSideSpace from "@/components/layout/LayoutSideSpace";
import Cart from "./Cart";
import ImageCart from "./component/ImageCart";
import { BreadcrumbCustom } from "@/components/common/BreadCrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import { BreadcrumbPage } from "@/components/ui/breadcrumb";
const aboutBreadcrumbArray = [
  { title: "Home", href: "./" },
  { title: "about", href: "/about" },
];
function page() {
  return (
    <div>
      <LayoutSideSpace>
        {/* <div className="flex mt-5">
          <BreadcrumbCustom href="./" title="Home" />
          <SlashIcon />
          <BreadcrumbCustom href="./about" title="about" />
          <BreadcrumbPage />
        </div> */}
        <BreadcrumbCustom itemsList={aboutBreadcrumbArray} />
        <OurStory />
        <Cart />
        <ImageCart />
      </LayoutSideSpace>
    </div>
  );
}

export default page;
