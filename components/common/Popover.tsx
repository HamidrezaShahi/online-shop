import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
interface PopoverProps {
  Trigger: React.ReactNode;
  label1?: React.ReactNode;
  label2?: React.ReactNode;
  label3?: React.ReactNode;
  label4?: React.ReactNode;
  label5?: React.ReactNode;
}

export function PopoverDemo({
  Trigger,
  label1,
  label2,
  label3,
  label4,
  label5,
}: PopoverProps) {
  return (
    <Popover>
      <PopoverTrigger className="block p-0">
        <div> {Trigger}</div>
      </PopoverTrigger>
      <PopoverContent className="w-50 mr-10 bg-gradient-to-bl ">
        <div className="grid gap-4">
          <div className="grid gap-3">
            <div className="">{label1}</div>
            <div className="">{label2}</div>
            <div className="">{label3}</div>
            <div className="">{label4}</div>
            <div className="">{label5}</div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
