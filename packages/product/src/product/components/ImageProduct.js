import React from "react";

const ImageProduct = ({ image, name }) => {
  return (
    <img
      src={image}
      width="100"
      height="200"
      alt={name}
    />
  );
};

export default ImageProduct;
