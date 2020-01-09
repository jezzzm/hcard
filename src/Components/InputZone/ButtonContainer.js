import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../constants";

const StyledContainer = styled.div`
  margin: 2em 0;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonContainer = props => (
  <StyledContainer>{props.children}</StyledContainer>
);

export default ButtonContainer;
