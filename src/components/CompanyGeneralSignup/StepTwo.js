"use strict";
import React from "react";
import SimpleStorage, { resetParentState } from "../../stores/SimpleStorage";

export class StepTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      payroll: "",
      provider: "",
      heardAbout: "",
      providerOther: false
    };
  }

  componentWillMount() {
    console.log("I am a log message !");
  }

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.provider !== prevState.provider) {
      console.log("working?");
    }
  }

  handlePayrollChange = event => {
    this.setState({ payroll: event.target.value });
  };

  handleProviderChange = event => {
    this.setState({ provider: event.target.value });
  };

  handleHeardAboutChange = event => {
    this.setState({ heardAbout: event.target.value });
  };

  handleOptionChange = () => {
    if (this.state.provider === "Other") {
      this.setState({ providerOther: true });
      console.log("true triggered", this.state.providerOther);
    } else {
      this.setState({ providerOther: false });
      console.log("false triggered", this.state.providerOther);
    }
  };

  handleOtherProviderChange = event => {
    this.setState({ provider: event.target.value });
    this.handleOptionChange();
  };

  render() {
    const providerOther = this.state.providerOther ? (
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
    ) : null;
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
              <option>Yes</option>
            </select>
          </div>
          <div id="signupDiv">
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
              <option>Pay</option>
              <option>SurePayroll</option>
              <option>Other</option>
            </select>
            {providerOther}
          </div>
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
