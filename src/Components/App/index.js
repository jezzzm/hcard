import React, { Component } from "react";
import InputZone from "../InputZone";
import PreviewZone from "../PreviewZone";

import styled from "@emotion/styled";
import { colors, breakpoints } from "../../constants";
const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 1150px;
  width: 100%;
  display: flex;
  section {
    width: 50%;
    padding: 3em;
  }
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    section {
      width: 100%;
    }
  }

  label > span {
    text-transform: uppercase;
    color: ${colors.secondary};
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
    let path;
    try {
      path = URL.createObjectURL(e.target.files[0]);
    } catch {
      path = this.state.photo;
    }
    this.setState({ photo: path });
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
