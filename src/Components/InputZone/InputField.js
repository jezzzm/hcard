import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../constants";
const StyledLabel = styled.label`
  margin: 0.4em 0;
  display: inline-block;
  input {
    display: block;
    font-family: Garamond, Georgia, sans-serif;
    padding: 0.4em;
    font-size: 1em;
    width: 100%;
    border: 1px solid ${colors.lightGrey};
    border-radius: 0.2em;
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
