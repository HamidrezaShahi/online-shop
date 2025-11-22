import Link from "next/link";
import React from "react";
import SignUpAndLoginInputs from "./SignUpAndLoginInputs";
import { Button } from "../ui/button";

function LoginForm() {
  return (
    <div className="container mx-auto flex flex-row h-3/4">
      <div className="w-1/2">
        <div className="bg-blue-300 h-full">lk</div>
      </div>
      <div className="w-1/2 p-10">
        <h1 className="text-4xl font-bold mb-5">Log in to Exclusive </h1>
        <p className="mb-5 font-medium text-lg ">Enter your details below</p>
        <br />
        <SignUpAndLoginInputs
          label="Email or Phone number"
          placeholder="Enter your email or phone number"
          type="text"
        />
        <br />
        <SignUpAndLoginInputs
          label="password"
          placeholder="Enter your password"
          type="password"
        />
        <br />
        <div className="flex mt-5 justify-between ">
          <Button size="lg" variant="destructive">
            Login
          </Button>
          <Link className="text-red-500" href="./">
            Forget Password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
