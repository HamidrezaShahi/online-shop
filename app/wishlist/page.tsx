import React from "react";
import { ProductName } from "@/components/ProductHorizontalList";
import { HorizontalList } from "@/components/common/HorizontalList";
import ProductCart from "@/components/common/ProductCart";
import LayoutSideSpace from "@/components/layout/LayoutSideSpace";
import SectionsTitles from "@/components/common/SectionsTitles";
function page() {
  return (
    <>
      <LayoutSideSpace>
        <div className="flex flex-col mt-10">
          <div className="flex justify-between">
            <span> wishlist({ProductName.length})</span>
            <button className="w-[223px] h-[56px]  border-2  rounded-sm">
              View All Products
            </button>
          </div>
          <HorizontalList
            key="discount-day"
            list={ProductName.map((name) => {
              return (
                <>
                  <ProductCart
                    label={name.name}
                    off={name.offerPercentage}
                    price={name.price}
                  />
                </>
              );
            })}
          />
        </div>
        <div>
          <div className="flex justify-between">
            <SectionsTitles sectionName="For You" />
            <button className="w-[150px] h-[56px]  border-2  rounded-sm">
              see all{" "}
            </button>
          </div>
          <div className="flex mt-10 ">
            <HorizontalList
              key="discount-day"
              list={ProductName.map((name, index) => {
                return (
                  <>
                    <ProductCart
                      label={name.name}
                      off={name.offerPercentage}
                      price={name.price}
                    />
                  </>
                );
              })}
            />
          </div>
          <div className="flex mt-10 ">
            <HorizontalList
              key="discount-day"
              list={ProductName.map((name, index) => {
                return (
                  <>
                    <ProductCart
                      label={name.name}
                      off={name.offerPercentage}
                      price={name.price}
                    />
                  </>
                );
              })}
            />
          </div>
        </div>
      </LayoutSideSpace>
    </>
  );
}

export default page;
