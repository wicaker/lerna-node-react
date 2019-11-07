import React from "react";
import { Button } from "reactstrap";

const ButtonC = ({ color, name }) => {
  return (
    <div>
      <Button color={color}>{name}</Button>
    </div>
  );
};

export default ButtonC;
