import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
interface AddprtypeProp {
  onsubmit: (newValue: object) => void;
  editObject: any;
}
function Addprtype({ onsubmit, editObject }: AddprtypeProp) {
  const [Data, setData] = useState<any>(editObject);
  function inputChangFunction(e: React.ChangeEvent<HTMLInputElement>) {
    const copy = { ...Data };
    copy[e.target.name] = e.target.value;
    setData(copy);
  }
  return (
    <div>
      <div className="p-5 w-2/4">
        <Input value={Data.name} name="name" onChange={inputChangFunction} />
      </div>
      <Button onClick={() => onsubmit({ ...Data })}>save changes</Button>
    </div>
  );
}

export default Addprtype;
