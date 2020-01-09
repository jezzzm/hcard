import React from "react";
import styled from "@emotion/styled";

const StyledLabel = styled.label`
  margin: 0.4em 0;
  display: inline-block;
  input {
    display: block;
    font-family: Garamond, Georgia, sans-serif;
    padding: 0.4em;
    font-size: 1em;
  }
`;
const InputField = props => (
  <StyledLabel>
    <span>{props.labelText}</span>
    <input
      type={props.inputType}
      placeholder={props.placeholderText}
      onChange={props.inputChange}
      name={props.fieldName}
    />
  </StyledLabel>
);

export default InputField;
