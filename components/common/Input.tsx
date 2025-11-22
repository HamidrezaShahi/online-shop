import React, { Children } from "react";
import { FiSearch } from "react-icons/fi";
interface InputProps {
  children?: React.ReactNode;
  placeholderText: string;
  style: string;
  inputStyle: string;
  label?: string;
}

function Input({
  children,
  placeholderText,
  style,
  inputStyle,
  label,
  ...restProps
}: InputProps) {
  return (
    <div className={style}>
      <label className="mt-4">{label}</label>
      <input
        {...restProps}
        placeholder={placeholderText}
        className={inputStyle}
      />
      {children && <button>{children} </button>}
    </div>
  );
}

export default Input;
