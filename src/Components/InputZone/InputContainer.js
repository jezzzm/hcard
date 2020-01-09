import React from "react";
import styled from "@emotion/styled";
import InputField from "./InputField";

const StyledContainer = styled.div`
  margin: 2em 0;
  > span {
    border-bottom: 1px solid gray;
    padding-bottom: 0.2em;
    color: #666;
    display: block;
    font-size: 0.6em;
  }
  > div {
    margin: 1em 0;
  }
`;

const InputContainer = props => (
  <StyledContainer>
    <span>{props.containerTitle}</span>
    <div>{props.children}</div>
  </StyledContainer>
);

export default InputContainer;
