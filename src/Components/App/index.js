import React, { Component } from "react";
import InputZone from "../InputZone";
import PreviewZone from "../PreviewZone";

import styled from "@emotion/styled";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  display: flex;
  section {
    width: 50%;
    padding: 2rem;
  }
`;

const INITIAL_STATE = {
  givenName: "",
  familyName: "",
  email: "", //input type: email
  phone: "", //input type: tel (browser finds saved phone numbers for autocomplete)
  photo: "", //input type: file (for upload)
  address: {
    number: "",
    street: "",
    locality: "", //aka suburb
    region: "", //aka state
    postcode: "",
    country: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }
  render() {
    return (
      <StyledApp className="App">
        <StyledMain>
          <InputZone />
          <PreviewZone />
        </StyledMain>
      </StyledApp>
    );
  }
}

export default App;
