"use client";

import { Checkbox } from "@/components/ui/checkbox";
interface ChackboxDemo {
  label: string;
  clickF: () => {};
}
export function CheckboxDemo({ label, clickF }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox name="test" value={label} onClick={clickF} id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}{" "}
      </label>
    </div>
  );
}
