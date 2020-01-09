import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../constants";

const StyledContainer = styled.div`
  margin: 2em 0;
  > label span {
    border-bottom: 1px solid ${colors.lightGrey};
    padding-bottom: 0.2em;
    color: ${colors.lightGrey};
    display: block;
    font-size: 0.6em;
  }
  > div {
    margin: 1em 0;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }
`;

const InputContainer = props => (
  <StyledContainer>
    <label>
      <span>{props.containerTitle}</span>
    </label>
    <div>{props.children}</div>
  </StyledContainer>
);

export default InputContainer;
