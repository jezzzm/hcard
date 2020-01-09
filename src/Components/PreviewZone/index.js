import React from "react";
import DataRow from "./DataRow";
import styled from "@emotion/styled";

const StyledPreviewZone = styled.section`
  background: lightblue;
`;

const PreviewZone = props => {
  const {
    givenName,
    familyName,
    email,
    phone,
    photo,
    streetNumber,
    street,
    locality,
    region,
    postcode,
    country
  } = props;

  const addrLineOne = `${streetNumber} ${street}`;
  const addrLineTwo = `${locality}, ${region}`;

  return (
    <StyledPreviewZone>
      <h1>
        {givenName} {familyName}
      </h1>
      <DataRow labelText="Email" dataText={email} />
      <DataRow labelText="Phone" dataText={phone} />
      <DataRow labelText="Address" dataText={addrLineOne} />
      <DataRow labelText="" dataText={addrLineTwo} />
      <DataRow labelText="Postcode" dataText={postcode} />
      <DataRow labelText="Country" dataText={country} />
    </StyledPreviewZone>
  );
};

export default PreviewZone;
