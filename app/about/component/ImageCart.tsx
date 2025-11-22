import React from "react";

const houses = [
  { name: "Stark", image: "wolf", workHistory: "gray", SocialPages: "icons" },
  {
    name: "Lannister",
    image: "lion",
    workHistory: "gold",
    SocialPages: "icons",
  },
  {
    name: "Targaryen",
    image: "dragon",
    workHistory: "red",
    SocialPages: "icons",
  },
];
function ImageCart() {
  return (
    <div className="flex gap-3">
      {houses.map((e) => {
        return (
          <div className=" w-[370px] h-[567px] bg-white flex flex-col justify-center items-start  ">
            <div className="bg-gray-200 flex  h-[430px]  w-[90%] p-1">
              {e.image}
            </div>
            <div className="mt-4 ">
              <div className="font-semibold text-lg ">{e.name}</div>
              <div>{e.workHistory}</div>
              <div>{e.SocialPages}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageCart;
