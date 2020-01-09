import React from "react";
import DataRow from "./DataRow";
import styled from "@emotion/styled";

const StyledPreviewZone = styled.section`
  background: lightblue;
  img {
    max-width: 30%;
    max-height: 200px;
  }
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
  const addrLineTwo = region ? `${locality}, ${region}` : locality;

  return (
    <StyledPreviewZone>
      <h1>
        {givenName} {familyName}
      </h1>
      {photo && <img src={photo} alt="hCard Avatar" />}
      <DataRow labelText="Email" dataText={email} />
      <DataRow labelText="Phone" dataText={phone} />
      <DataRow labelText="Address" dataText={addrLineOne} />
      <DataRow labelText=" " dataText={addrLineTwo} />
      <DataRow labelText="Postcode" dataText={postcode} />
      <DataRow labelText="Country" dataText={country} />
    </StyledPreviewZone>
  );
};

export default PreviewZone;
