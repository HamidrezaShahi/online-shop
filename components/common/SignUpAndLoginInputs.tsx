import React from "react";
interface SignUpAndLoginInputsProps {
  label: string;
  placeholder: string;
  type: string;
}
function SignUpAndLoginInputs({
  label,
  placeholder,
  type,
}: SignUpAndLoginInputsProps) {
  return (
    <form className="flex flex-col gap-4">
      <label className=" " htmlFor="email">
        {label}{" "}
      </label>
      <input
        className=" p-2  border-b-2 focus:outline-none "
        type={type}
        id="email"
        placeholder={placeholder}
      />
    </form>
  );
}

export default SignUpAndLoginInputs;
