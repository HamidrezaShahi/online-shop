import React from "react";
interface inputs {
  label1: string;
  label2: string;
}
function Inputs({ label1, label2 }: inputs) {
  return (
    <div>
      <div className="w-full flex">
        <div className="gap-4 flex flex-col  ">
          <label>{label1}</label>
          <input className="border h-11 shadow-md rounded-md" />
        </div>
        <div className="gap-4 flex flex-col  ">
          <label>{label2}</label>
          <input className="border h-11 shadow-md rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Inputs;
