"use strict";
import React from "react";
import States from "./StateSelector";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepOne extends React.Component {
  constructor() {
    super();
    this.state = {
      FullName: "",
      CompanyEmail: "",
      State: "",
      CompanyName: "",
      CompanyPhone: "",
      EmployeeNumber: ""
    };
    this.initialState = this.state;
  }

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
            <States />
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