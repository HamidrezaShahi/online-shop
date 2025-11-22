"use client";
import { PopoverDemo } from "@/components/common/Popover";
import LayoutSideSpace from "@/components/layout/LayoutSideSpace";
import Link from "next/link";
import PromotionalImage from "./assets/image/phonsLanding.png";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Image from "next/image";
import ProductHorizontalList, {
  ProductName,
} from "@/components/ProductHorizontalList";
export default function Home() {
  const popoversArray = [
    { label: "Woman’s Fashion", subItem: { label: "", link: "" } },
    { label: "Men’s Fashion", subItem: { label: "", link: "" } },
    { label: "Electronics" },
    { label: "Home & Lifestyle" },
    { label: "Medicine" },
    { label: "Sports & Outdoor" },
    { label: "Baby’s & Toys" },
    { label: "Groceries & Pets" },
    { label: "Health & Beauty" },
  ];
  const createPropType = () => {
    fetch("/api/v1/base/prop-type");
  };
  const time = new Date();
  time.setSeconds(time.getSeconds() + 240000); // 10 minutes timer
  return (
    <div>
      {/* <button onClick={createPropType}>create prop-type</button> */}
      <LayoutSideSpace className="space-y-10">
        <div className="grid gap-6 grid-cols-12 ">
          <div className="hidden md:block md:col-span-3 ">
            <div className=" w-full h-full border-r-2 flex-1 pt-4">
              {popoversArray.map((e, index) => {
                return (
                  <div key={index}>
                    {!e?.subItem ? (
                      <Link className="h-9 block content-center" href={"/"}>
                        {e?.label}
                      </Link>
                    ) : (
                      <PopoverDemo label={e?.label} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 justify-end  md:col-span-9 pt-4">
            <Image
              src={PromotionalImage}
              alt="Landing-banner"
              className="w-full"
            />
          </div>
        </div>
        <ProductHorizontalList
          productList={ProductName}
          title="Flash Sales"
          sectionName="Today's"
          expiryTimestamp={time}
        />
        <Categories />
        <ProductHorizontalList
          productList={ProductName}
          title="Best Selling Products"
          sectionName="This Month"
        />
        <Featured />
      </LayoutSideSpace>
    </div>
  );
}
