import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
interface radioProp {
  label: string;
}
function RadioButton({ label }: radioProp) {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">{label}</Label>
      </div>
    </RadioGroup>
  );
}

export default RadioButton;
