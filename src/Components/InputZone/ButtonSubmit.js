import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../constants";

const StyledSubmit = styled.button`
  background: ${colors.primary};
  box-shadow: 0 2px ${colors.midGrey};
  transition: 0.1s box-shadow;
  &:hover {
    box-shadow: 0 2px transparent;
  }
`;

const ButtonSubmit = props => (
  <StyledSubmit type="button" onChange={props.hCardSubmit}>
    Create hCard
  </StyledSubmit>
);

export default ButtonSubmit;
