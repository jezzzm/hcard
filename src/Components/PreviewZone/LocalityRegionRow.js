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
    margin-bottom: -0.3em;
    border: 0;
    font-family: Garamond, Georgia, serif;
    height: 20px;
    font-size: 1em;
    color: ${colors.copy};
  }
`;

const LocalityRegionRow = props => {
  const { labelText, localityText, regionText } = props;
  return (
    <StyledData>
      <label>
        <span>{labelText}</span>
      </label>
      {localityText && <span className="locality">{localityText}</span>}
      {localityText && regionText && `, `}
      {regionText && <span className="region">{regionText}</span>}
    </StyledData>
  );
};

export default LocalityRegionRow;
