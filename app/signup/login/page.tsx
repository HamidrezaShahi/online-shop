import LoginForm from "@/components/common/LoginForm";
import React from "react";
import { BreadcrumbCustom } from "@/components/common/BreadCrumb";
const loginBreadCrumbArray = [
  { title: "Home", href: "./" },
  { title: "SignUp", href: "/signup" },
  { title: "Login", href: "/signup/login" },
];
function Page() {
  return (
    <div className="py-5">
      <BreadcrumbCustom itemsList={loginBreadCrumbArray} />
      <div className="py-5">
        <LoginForm />;
      </div>
    </div>
  );
}

export default Page;
