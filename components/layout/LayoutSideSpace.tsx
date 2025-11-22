import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const LayoutSideSpace: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={"w-full px-1 sm:px-6 lg:px-14 " + className}>
      {children}
    </div>
  );
};

export default LayoutSideSpace;
