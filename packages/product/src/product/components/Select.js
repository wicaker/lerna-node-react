import React from "react";
import { FormGroup, Input } from "reactstrap";

const Select = ({ array }) => {
  const option = array.map(item => {
    return <option key={item}>{item}</option>;
  });
  return (
    <FormGroup>
      <Input type="select" name="select" id="wishlist-select">
        {option}
      </Input>
    </FormGroup>
  );
};

export default Select;
