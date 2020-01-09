import React from "react";
import DataRow from "./DataRow";
import styled from "@emotion/styled";
import { colors, breakpoints } from "../../constants";
import defaultAvatar from "./default-avatar.png";
import LocalityRegionRow from "./LocalityRegionRow";

const StyledPreviewZone = styled.section`
  background: ${colors.bgGrey};
`;

const StyledPreviewContainer = styled.article`
  margin: 8em auto 0;
  max-width: 600px;
  h4 {
    text-align: right;
    color: ${colors.lightGrey};
    margin-bottom: 0.5em;
  }
  header {
    background: ${colors.darkGrey};
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1.5em;
    h1 {
      color: white;
      font-family: Garamond, Georgia, serif;
      margin: 0;
      font-size: 1.5em;
      max-width: 70%;
    }
    img {
      max-width: 30%;
      max-height: 100px;
      align-self: flex-start;

      box-shadow: 1px 2px 2px ${colors.lightGrey};
    }
  }
  .content {
    background: white;
    padding: 1.5em;
    box-shadow: 0 3px 2px ${colors.lightGrey};
  }
  @media (max-width: ${breakpoints.md}) {
    margin-top: 0;
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
  const url = photo ? photo : defaultAvatar;
  return (
    <StyledPreviewZone>
      <StyledPreviewContainer className="vcard">
        <h4>HCARD PREVIEW</h4>
        <header>
          <h1 className="fn n">
            <span className="given-name">{givenName}</span>{" "}
            <span className="family-name">{familyName}</span>
          </h1>
          <img src={url} alt="hCard Avatar" className="photo" />
        </header>
        <div className="content">
          <DataRow labelText="Email" dataText={email} hCardProp="email" />
          <DataRow labelText="Phone" dataText={phone} hCardProp="tel" />
          <div className="adr">
            <DataRow
              labelText="Address"
              dataText={addrLineOne}
              hCardProp="street-address"
            />
            <LocalityRegionRow localityText={locality} regionText={region} />
            <DataRow
              labelText="Postcode"
              dataText={postcode}
              hCardProp="postal-code"
            />
            <DataRow
              labelText="Country"
              dataText={country}
              hCardProp="country-name"
            />
          </div>
        </div>
      </StyledPreviewContainer>
    </StyledPreviewZone>
  );
};

export default PreviewZone;
