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

  span {
    text-transform: uppercase;
    color: #444;
    font-size: 0.7em;
    font-family: Helvetica, Arial, sans-serif;
  }
`;

const INITIAL_STATE = {
  givenName: "",
  familyName: "",
  email: "", //input type: email
  phone: "", //input type: tel (browser finds saved phone numbers for autocomplete)
  photo: null, //input type: file (for upload)
  streetNumber: "",
  street: "",
  locality: "", //aka suburb
  region: "", //aka state
  postcode: "",
  country: ""
};

class App extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  _handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleFileChange = e => {
    e.preventDefault();
    this.setState({ photo: URL.createObjectURL(e.target.files[0]) });
  };

  render() {
    const data = this.state;
    return (
      <StyledApp className="App">
        <StyledMain>
          <InputZone
            {...data}
            inputChange={this._handleChange}
            fileChange={this._handleFileChange}
          />
          <PreviewZone {...data} />
        </StyledMain>
      </StyledApp>
    );
  }
}

export default App;
