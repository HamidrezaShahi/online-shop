import React from "react";
import SectionsTitles from "./common/SectionsTitles";
import CategoriesCard from "./common/CategoriesCard";
function Categories() {
  return (
    <div className="my-6 ">
      <SectionsTitles sectionName="Categories" />
      <h1 className="text-2xl mt-5 ">Browse By Category</h1>
      <CategoriesCard />
    </div>
  );
}

export default Categories;
