"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@radix-ui/react-select";
interface CategoriesMenuProp {
  onChange: (newData: string) => void;
  value?: string;
  items: { name: string; _id: string }[];
}
export function SelectMenu({ onChange, value, items }: CategoriesMenuProp) {
  function selectFunction(value: string) {
    console.log(value);
    onChange(value);
  }
  return (
    <Select onValueChange={selectFunction} value={value}>
      <SelectTrigger className="w-[50%]">
        <SelectValue placeholder="Categories " />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>propertyType</SelectLabel>
          {items.map((e) => {
            return <SelectItem value={e.name}>{e.name}</SelectItem>;
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
