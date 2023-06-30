import React from "react";

const InfHSlider = ({ images }) => {
  return (
    <ul className="flex overflow-x-auto">
      {images.map((el, key) => (
        <li key={key} className="">
          <img src={el} className="h-96 min-w-full" />
        </li>
      ))}
    </ul>
  );
};

export default InfHSlider;
