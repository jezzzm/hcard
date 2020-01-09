import React from "react";
import styled from "@emotion/styled";

const StyledLabel = styled.label`
  input[type="file"] {
    position: absolute;
    opacity: 0;
    z-index: 0;
    max-width: 100%;
    height: 100%;
    display: block;
  }
  button {
    color: white;
    background: #444;
    padding: 1em 3em;
    font-family: Garamond, Georgia, serif;
  }
`;

const ButtonUpload = props => (
  <StyledLabel>
    <input
      type="file"
      accept="image/*"
      name="upload"
      multiple={false}
      onChange={props.fileChange}
    />
    <button>Upload Avatar</button>
  </StyledLabel>
);

export default ButtonUpload;
