import React from "react";
interface ImageProps {
  style: React.ReactNode;
}
function Image({ style }) {
  return <div className={style}>Image</div>;
}

export default Image;
