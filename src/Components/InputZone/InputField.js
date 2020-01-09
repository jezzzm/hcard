import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  display: block;
`;
const InputField = props => (
  <label>
    <span>{props.labelName}</span>
    <StyledInput
      type={props.inputType}
      placeholder={props.placeholderText}
      onChange={props.inputChange}
      name={props.fieldName}
    />
  </label>
);

export default InputField;
