import React from "react";
import ProductCart from "./common/ProductCart";
import Timer from "./common/Timer";
import { HorizontalList } from "./common/HorizontalList";
import SectionsTitles from "./common/SectionsTitles";
export const originalProduct = [
  { name: "game", offerPercentage: 0, price: 500 },
  { name: "computer", offerPercentage: 50, price: 500 },
  { name: "case", offerPercentage: 40, price: 500 },
  { name: "shoes", offerPercentage: 20, price: 500 },
  { name: "coat", offerPercentage: 0, price: 500 },
  { name: "t-short", offerPercentage: 30, price: 500 },
  { name: "phone", offerPercentage: 5, price: 500 },

  { name: "coat", offerPercentage: 40, price: 500 },
];
export const ProductName = [...originalProduct];
interface ProductHorizontalListProps {
  expiryTimestamp?: Date;
  title: string;
  sectionName: string;
  productList: unknown[];
}

function ProductHorizontalList({
  expiryTimestamp,
  title,
  sectionName,
  productList,
}: ProductHorizontalListProps) {
  return (
    <div className="   ">
      <div className=" ">
        <SectionsTitles sectionName={sectionName} />
        <div className=" mt-6 flex space-x-24  ">
          <h2 className="font-medium text-xl">{title}</h2>
          {expiryTimestamp && (
            <div className="">
              <Timer expiryTimestamp={expiryTimestamp} />
            </div>
          )}
        </div>
      </div>
      <div className="flex mt-4">
        <HorizontalList
          key="discount-day"
          list={productList.map((name) => {
            // TODO add keys
            return (
              <ProductCart
                label={name.name}
                off={name.offerPercentage}
                price={name.price}
              />
            );
          })}
        />
      </div>
      <div className="flex justify-center mt-14">
        <button className="text-white bg-red-600 h-[56px] w-64 rounded-lg">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default ProductHorizontalList;
