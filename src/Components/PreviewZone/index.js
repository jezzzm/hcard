import React from "react";
import styled from "@emotion/styled";

const StyledPreviewZone = styled.section`
  background: lightblue;
`;

const PreviewZone = function() {
  return (
    <StyledPreviewZone>
      <h1>Firstname Lastname</h1>
      <p>info goes here</p>
    </StyledPreviewZone>
  );
};

export default PreviewZone;
