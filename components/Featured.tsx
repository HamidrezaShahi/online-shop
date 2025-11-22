import React from "react";
import SectionsTitles from "./common/SectionsTitles";
import Img1 from "../app/assets/image/img-1.png";
import Image from "next/image";
import womanImg from "../app/assets/image/WomanImg.png";
import SpeakerImg from "../app/assets/image/Speakers.png";
function Featured() {
  // TODO add other images
  return (
    <div className="mt-[140px] ">
      <SectionsTitles sectionName="Featured" />
      <h1 className="text-2xl mt-5">New Arrival</h1>
      <div className="flex gap-2 w-full mb-14 mt-14">
        <Image src={Img1} alt="img1" />
        <div className="block flex-1 gap-3">
          <div className="w-[570px] min-h-[250px] bg-red-300">
            <Image src={womanImg} alt="womam img" />
          </div>
          <div className="block">
            <div className="flex gap-2 mt-2">
              <div className="w-[270px] min-h-[250px] bg-slate-500 flex-1">
                <Image src={SpeakerImg} alt="speaker" />
              </div>
              <div className="w-[10%] min-h-[250px] bg-blue-600 flex-1">
                img4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
