import React from "react";
import styled from "@emotion/styled";
import InputContainer from "./InputContainer";
import InputField from "./InputField";
import ButtonUpload from "./ButtonUpload";
import ButtonContainer from "./ButtonContainer";
import ButtonSubmit from "./ButtonSubmit";
import { colors } from "../../constants";

const StyledInputZone = styled.section`
  h1 {
    color: ${colors.secondary};
    font-size: 2em;
  }
`;

const InputZone = props => {
  return (
    <StyledInputZone>
      <h1>hCard Builder</h1>
      <InputContainer containerTitle="personal details">
        <InputField
          fieldName="givenName"
          labelText="First Name"
          placeholderText="e.g. Alex"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="familyName"
          labelText="Surname"
          placeholderText="e.g. Smith"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="email"
          labelText="Email"
          placeholderText="e.g. alex.smith@example.com"
          inputChange={props.inputChange}
          inputType="email"
        />
        <InputField
          fieldName="phone"
          labelText="Phone"
          placeholderText="e.g. 0400 000 000"
          inputChange={props.inputChange}
          inputType="tel"
        />
      </InputContainer>
      <InputContainer containerTitle="address">
        <InputField
          fieldName="streetNumber"
          labelText="House name or #"
          placeholderText="e.g. 3A"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="street"
          labelText="Street"
          placeholderText="e.g. George Street"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="locality"
          labelText="Suburb"
          placeholderText="e.g. Sydney"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="region"
          labelText="State"
          placeholderText="e.g. NSW"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="postcode"
          labelText="Postcode"
          placeholderText="e.g. 2000"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="country"
          labelText="Country"
          placeholderText="e.g. Australia"
          inputChange={props.inputChange}
          inputType="text"
        />
      </InputContainer>
      <ButtonContainer>
        <ButtonUpload fileChange={props.fileChange} />
        <ButtonSubmit hCardSubmit={props.hCardSubmit} />
      </ButtonContainer>
    </StyledInputZone>
  );
};

export default InputZone;
