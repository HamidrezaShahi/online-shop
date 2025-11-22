import React from "react";
import SignUpAndLoginInputs from "./common/SignUpAndLoginInputs";
import Link from "next/link";

function SignUppForm() {
  return (
    <div className="container mx-auto flex flex-row h-3/4">
      <div className="w-1/2">
        <div className="bg-blue-300 h-full">lk</div>
      </div>
      <div className="w-1/2 p-10">
        <h1 className="text-4xl font-bold mb-5">Create an Account</h1>
        <p className="mb-5 font-medium text-lg">Enter your details below</p>
        <SignUpAndLoginInputs
          label="Email or Phone number"
          placeholder="Enter your email or phone number"
          type="email"
        />
        <SignUpAndLoginInputs
          label="password"
          placeholder="Enter your password"
          type="password"
        />
        <div className="flex mt-5 justify-center ">
          {" "}
          <p className="mr-2 font-sans">Already have account?</p>
          <Link href={"/login"}>
            <p className="text-blue-500 font-semibold">Log in</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUppForm;
