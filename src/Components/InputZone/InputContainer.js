import React from "react";
import styled from "@emotion/styled";
import InputField from "./InputField";

const StyledContainer = styled.div`
  margin: 2em 0;
  > p {
    color: gray;
    text-transform: uppercase;
    border-bottom: 1px solid gray;
    padding-bottom: 0.5em;
  }
`;

const InputContainer = props => (
  <StyledContainer>
    <p>{props.containerTitle}</p>
    <div>{props.children}</div>
  </StyledContainer>
);

export default InputContainer;
