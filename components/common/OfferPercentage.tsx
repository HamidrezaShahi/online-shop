import React from "react";
interface OfferPercentageProps {
  off: number;
}
function OfferPercentage(props: OfferPercentageProps) {
  return (
    <div className="w-[55px] h-[26px]   bg-red-700 text-white grid place-content-center rounded-md">
      <span className="text-sm">{`${props.off} %`}</span>
    </div>
  );
}

export default OfferPercentage;
