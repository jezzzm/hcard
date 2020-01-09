import React from "react";
import styled from "@emotion/styled";

const StyledInputZone = styled.section`
  background: pink;
`;

const InputZone = function() {
  return (
    <StyledInputZone>
      <h1>hCard Builder</h1>
      <p>info goes here</p>
    </StyledInputZone>
  );
};

export default InputZone;
