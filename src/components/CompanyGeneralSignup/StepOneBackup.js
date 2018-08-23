"use strict";
import React from "react";
import { StateInfo } from "./StateInfo";
import VirtualizedSelect from "react-virtualized-select";
import SimpleStorage from "../CompanyEnrollment/SimpleStorage";

var baseURL = "https://saveawaytest.herokuapp.com/states";

export class StepOne extends React.Component {
  constructor() {
    super();
    this.state = {
      FullName: "",
      CompanyEmail: "",
      State: "",
      CompanyName: "",
      CompanyPhone: "",
      EmployeeNumber: "",
      clearable: true,
      disabled: false,
      multi: false,
      searchable: true,
      selectedCreatable: null,
      States: [{ State: "Alabama" },
      { State: "Alaska" },
      { State: "Arizona" },
      { State: "Arkansas" },
      { State: "California" },
      { State: "Colorado" },
      { State: "Connecticut" },
      { State: "Delaware" },
      { State: "Florida" },
      { State: "Georgia" },
      { State: "Hawaii" },
      { State: "Idaho" },
      { State: "Illinois" },
      { State: "Indiana" },
      { State: "Iowa" },
      { State: "Kansas" },
      { State: "Kentucky" },
      { State: "Louisiana" },
      { State: "Maine" },
      { State: "Maryland" },
      { State: "Massachusetts" },
      { State: "Michigan" },
      { State: "Minnesota" },
      { State: "Mississippi" },
      { State: "Missouri" },
      { State: "Montana" },
      { State: "Nebraska" },
      { State: "Nevada" },
      { State: "New Hampshire" },
      { State: "New Jersey" },
      { State: "New Mexico" },
      { State: "New York" },
      { State: "North Carolina" },
      { State: "North Dakota" },
      { State: "Ohio" },
      { State: "Oklahoma" },
      { State: "Oregon" },
      { State: "Pennsylvania" },
      { State: "Rhode Island" },
      { State: "South Carolina" },
      { State: "South Dakota" },
      { State: "Tennessee" },
      { State: "Texas" },
      { State: "Utah" },
      { State: "Vermont" },
      { State: "Virginia" },
      { State: "Washington" },
      { State: "West Virginia" },
      { State: "Wisconsin" },
      { State: "Wyoming" }]
    };
    this.initialState = this.state;
  }

  generateLocations = location => {
    return <option value={location.State}> {location.State} </option>;
  };
  change = event => {
    if (event == null) {
      return this.setState({ State: "Colorado" });
    }
    this.setState({ State: event.target.value });
  };

  handleNameChange = event => {
    this.setState({
      FullName: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      CompanyEmail: event.target.value
    });
  };

  handleCompanyNameChange = event => {
    this.setState({ CompanyName: event.target.value });
  };

  handleCompanyPhoneChange = event => {
    this.setState({ CompanyPhone: event.target.value });
  };

  handleEmployeeNumberChange = event => {
    this.setState({ EmployeeNumber: event.target.value });
  };

  render() {
    const {
      clearable,
      disabled,
      multi,
      searchable,
      selectedState,
      State
    } = this.state;

    return (
      <div>
        <SimpleStorage parent={this} />
        <div id="signup-form">
          <div id="signupDiv">
            <label htmlFor="FullName">Full Name</label>
            <input
              type="text"
              id="signupInput"
              value={this.state.FullName}
              onChange={this.handleNameChange}
              name="FullName"
            />
            <label htmlFor="CompanyName">Company Name</label>
            <input
              type="text"
              id="signupInput"
              value={this.state.CompanyName}
              onChange={this.handleCompanyNameChange}
              name="CompanyName"
            />
          </div>
          <div id="signupDiv">
            <label htmlFor="CompanyEmail">Email Adress</label>
            <input
              type="text"
              id="signupInput"
              value={this.state.CompanyEmail}
              onChange={this.handleEmailChange}
              name="CompanyEmail"
            />
            <label htmlFor="CompanyPhone">Company Phone Number</label>
            <input
              type="text"
              id="signupInput"
              value={this.state.CompanyPhone}
              onChange={this.handleCompanyPhoneChange}
              name="CompanyPhone"
            />
          </div>
          <div id="signupDiv">
            <label htmlFor="State">What State do You Operate Within?</label>
            </div>
            <div>

            <VirtualizedSelect
              name="State"
              id="APIWoeid"
              options={this.state.States.map(item =>
                this.generateLocations(item)
              )}
              onChange={event => this.change(event)}
              value={this.state.State}
            />
          </div>
          <div id="signupDiv">
            <label htmlFor="EmployeeNumber">
              How many employees do you have?
            </label>
            <select
              name="EmployeeNumber"
              id="signupInputDrop"
              onChange={this.handleEmployeeNumberChange}
              value={this.state.EmployeeNumber}
            >
              <option value="" disabled selected>
                Looking to offer 401Ks to..
              </option>
              <option>1-10 employees</option>
              <option>20-100 employees</option>
              <option>100-200 employees</option>
            </select>
          </div>
          <br />
          <hr />
        </div>
        <hr />
      </div>
    );
  }
}
