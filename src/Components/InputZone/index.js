import React from "react";
import styled from "@emotion/styled";
import InputContainer from "./InputContainer";
import InputField from "./InputField";

const StyledInputZone = styled.section`
  background: pink;
`;

const InputZone = props => {
  return (
    <StyledInputZone>
      <h1>hCard Builder</h1>
      <InputContainer containerTitle="personal details">
        <InputField
          fieldName="givenName"
          labelName="First Name"
          placeholderText="e.g. Alex"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="familyName"
          labelName="Surname"
          placeholderText="e.g. Smith"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="email"
          labelName="Email"
          placeholderText="alex.smith@example.com"
          inputChange={props.inputChange}
          inputType="email"
        />
        <InputField
          fieldName="phone"
          labelName="Phone"
          placeholderText="0400 000 000"
          inputChange={props.inputChange}
          inputType="tel"
        />
      </InputContainer>
      <InputContainer containerTitle="address">
        <InputField
          fieldName="streetNumber"
          labelName="House name or #"
          placeholderText="e.g. 3A"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="street"
          labelName="Street"
          placeholderText="e.g. George Street"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="locality"
          labelName="Suburb"
          placeholderText="e.g. Sydney"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="region"
          labelName="State"
          placeholderText="e.g. NSW"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="postcode"
          labelName="Postcode"
          placeholderText="e.g. 2000"
          inputChange={props.inputChange}
          inputType="text"
        />
        <InputField
          fieldName="country"
          labelName="Country"
          placeholderText="e.g. Australia"
          inputChange={props.inputChange}
          inputType="text"
        />
      </InputContainer>
    </StyledInputZone>
  );
};

export default InputZone;
