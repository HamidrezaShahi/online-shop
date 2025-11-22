import React from "react";
import SignUppForm from "./conponents/SignUppForm";
import { BreadcrumbCustom } from "@/components/common/BreadCrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import { BreadcrumbPage } from "@/components/ui/breadcrumb";
const SignUpBreadCrumb = [
  { title: "Home", href: "./" },
  { title: "SignUp", href: "/singup" },
];
function page() {
  return (
    <div className="">
      <div className="flex p-3">
        <BreadcrumbCustom itemsList={SignUpBreadCrumb} />
      </div>
      <SignUppForm />
    </div>
  );
}

export default page;
