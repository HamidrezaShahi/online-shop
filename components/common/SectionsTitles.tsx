import React from "react";
interface SectionsTitlesProps {
  sectionName: string;
}
function SectionsTitles({ sectionName }: SectionsTitlesProps) {
  return (
    <div className="flex text items-center gap-4">
      <div className="w-5 h-10 bg-red-700 rounded-sm"></div>
      <span className="text-red-700">{sectionName}</span>
    </div>
  );
}

export default SectionsTitles;
