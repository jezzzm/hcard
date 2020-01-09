import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../constants";

const StyledData = styled.p`
  border-bottom: 1px solid ${colors.bgGrey};
  padding-bottom: 0.2em;
  width: 100%;
  label span {
    width: 80px;
    display: inline-block;
  }
  > span {
    width: calc(100% - 80px);
    margin-bottom: -0.3em;
    white-space: nowrap;
    display: inline-block;
    overflow-x: scroll;
    border: 0;
    font-family: Garamond, Georgia, serif;
    height: 20px;
    font-size: 1em;
    color: ${colors.copy};
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const DataRow = props => (
  <StyledData>
    <label>
      <span>{props.labelText}</span>
    </label>
    <span className={props.hCardProp}>{props.dataText}</span>
  </StyledData>
);

export default DataRow;
