import React, { useRef } from "react";
import styled from "@emotion/styled";
import { colors } from "../../constants";

const StyledLabel = styled.label`
  display: inline-block;
  input[type="file"] {
    display: none;
  }
  button {
    background: ${colors.midGrey};
    box-shadow: 0 2px ${colors.darkGrey};
    transition: 0.1s box-shadow;
    &:hover {
      box-shadow: 0 2px transparent;
    }
  }
`;

const ButtonUpload = props => {
  const fileUpload = useRef(null);

  return (
    <StyledLabel>
      <input
        type="file"
        accept="image/*"
        name="upload"
        multiple={false}
        onChange={props.fileChange}
        ref={fileUpload}
      />
      <button onClick={() => fileUpload.current.click()}>Upload Avatar</button>
    </StyledLabel>
  );
};

export default ButtonUpload;
