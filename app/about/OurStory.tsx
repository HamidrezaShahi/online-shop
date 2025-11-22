import React from "react";

function OurStory() {
  return (
    <div>
      <div className="flex gap-10 w-full ">
        <div className="flex flex-1 pt-10  w-3/4">
          <span>
            {" "}
            <h1 className="text-3xl font-bold mb-10">Our Story</h1>
            <p className="">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <br />
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </span>
        </div>

        <div className="flex flex-1 bg-orange-500 w-[505px] h-[400px] mt-5 ">
          {" "}
          image
        </div>
      </div>
    </div>
  );
}

export default OurStory;
