import React from "react";
import gameImg from "../../app/assets/image/50752d55f8b60f2aa2923183dadbc135.png";
import { FaRegEye } from "react-icons/fa6";
import { Heart } from "lucide-react";
import Image from "next/image";
import OfferPercentage from "./OfferPercentage";
import Link from "next/link";
interface ProductCartProps {
  label: string;
  off: number;
  price: number;
}
function ProductCart({ label, off, price }: ProductCartProps) {
  return (
    <Link className="h-full" href="/product">
      <div className="w-[180px] sm:w-[190px] md:w-[220px] lg:w-[250px] xl:w-[270px] h-full">
        <div className="w-full  bg-[#F5F5F5] h-[80%]  p-4 ">
          <div className="flex justify-between ">
            {off ? <OfferPercentage off={off} /> : undefined}

            <div className="lg:flex flex-col float-end  space-y-2 mt-0 hidden ">
              <button className="rounded-[50%]  flex bg-white w-6 h-6 justify-center items-center">
                <Heart width={16} height={14} />
              </button>
              <button className="rounded-[50%] flex  bg-white w-6 h-6 justify-center items-center">
                <FaRegEye className="rounded-[50%]" width={16} height={14} />
              </button>
            </div>
          </div>
          <Image className="w-full h-[85%] " src={gameImg} alt="gamaImage" />
        </div>
        <div className="flex flex-col gap-2">
          <span>{label} </span>

          <span>
            {off ? (
              <>
                <span className="text-red-700 ">${price * 1.3}</span>
                <span className="ml-3 line-through text-gray-400 ">
                  ${price}
                </span>
              </>
            ) : (
              `$${price}`
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}
export default ProductCart;
