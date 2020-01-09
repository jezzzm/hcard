import React from "react";
import styled from "@emotion/styled";

const StyledData = styled.p`
  border-bottom: 1px solid gray;
  padding-bottom: 0.2em;
  width: 100%;
`;

const DataRow = props => (
  <StyledData>
    <span>{props.labelText}</span>
    {props.dataText}
  </StyledData>
);
export default DataRow;
