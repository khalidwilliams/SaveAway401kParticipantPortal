"use strict";
import React from "react";
import SimpleStorage from "../CompanyEnrollment/SimpleStorage";

class HaveProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      provider: "",
      showProviderInput: false
    };
  }

  handleOtherProviderChange = event => {
    this.setState({ provider: event.target.value });
    console.log(this.state);
    if (this.state.provider === "Other") {
      this.setState({ showProviderInput: true });
    } else {
      this.setState({ showProviderInput: false });
    }
  };
  render() {
    return (
      <div id="signupDivOther">
        <label htmlFor="provider">If yes, Select Your Provider</label>
        <select
          name="provider"
          id="signupInputDrop"
          onChange={this.handleOtherProviderChange}
          value={this.state.provider}
        >
          <option value="" disabled selected>
            Please Select One...
          </option>
          <option>ADP</option>
          <option>Intuit</option>
          <option>Gusto</option>
          <option>OnPay</option>
          <option>SurePayroll</option>
          <option>Other</option>
        </select>
      </div>
    );
  }
}

class OtherProvider extends React.Component {
  handleProviderChange = event => {
    this.setState({ provider: event.target.value });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <label htmlFor="provider">
          If you chose other please indicate your provider
        </label>
        <input
          type="text"
          name="provider"
          id="signupInput"
          onChange={this.handleProviderChange}
        />
      </div>
    );
  }
}

export class StepTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      payroll: "",
      provider: "",
      heardAbout: "",
      showProviders: false,
      showProviderInput: false,
      showHeardAboutInput: false
    };
  }

  handlePayrollChange = event => {
    this.setState({ payroll: event.target.value });
    console.log(this.state);
    if (this.state.payroll === "Yes") {
      this.setState({ showProviders: true });
      this.setState({ provider: "" });
    } else {
      this.setState({ showProviders: false });
      this.setState({ provider: "Do Not Currently Have Payroll Provider" });
    }
  };

  handleHeardAboutChange = event => {
    this.setState({ heardAbout: event.target.value });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <div id="signup-form">
          <div id="signupDiv">
            <label htmlFor="payroll">
              Do you currently have a payroll provider?
            </label>
            <select
              name="payroll"
              id="signupInputDrop"
              onChange={this.handlePayrollChange}
              value={this.state.payroll}
            >
              <option value="" disabled selected>
                Please Select
              </option>
              <option>No, we do it manually</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          {this.state.showProviders ? <HaveProvider /> : null}
          {this.state.showProviderInput ? <OtherProvider /> : null}
          <div id="signupDiv">
            <label htmlFor="heardAbout">
              How Do you hear about SaveAway401k?
            </label>
            <select
              name="heardAbout"
              id="signupInputDrop"
              onChange={this.handleHeardAboutChange}
              value={this.state.heardAbout}
            >
              <option value="" disabled selected>
                Please Select
              </option>
              <option>Social Media</option>
              <option>Email</option>
              <option>Friend</option>
              <option>Colleagues</option>
              <option>Advertisement</option>
              <option>Other</option>
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
