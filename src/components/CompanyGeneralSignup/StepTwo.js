"use strict";
import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      payroll: "",
      provider: "",
      heardAbout: "",
      providerOther: false,
      heardAboutOther: false
    };
  }

  providerOther = () => {
    return (
      <div className="signupForm">
        <label htmlFor="provider">Please indicate your provider</label>
        <input
          type="text"
          name="provider"
          className="signupInput"
          onChange={this.handleProviderChange}
        />
      </div>
    );
  };

  heardAboutOther = () => {
    return (
      <div className="signupForm">
        <label htmlFor="heardAbout">Please indicate your source</label>
        <input
          type="text"
          name="heardAbout"
          className="signupInput"
          onChange={this.handleHeardAboutChange}
        />
      </div>
    );
  };

  handlePayrollChange = event => {
    this.setState({ payroll: event.target.value });
  };

  handleProviderChange = event => {
    this.setState({ provider: event.target.value });
  };

  handleHeardAboutChange = event => {
    this.setState({ heardAbout: event.target.value }, () => {
      this.props.sendData(this.state);
    });
  };

  handleOtherProviderChange = event => {
    this.setState(
      { provider: event.target.value, providerOther: false },
      () => {
        if (this.state.provider === "Other") {
          this.setState({ providerOther: true });
        }
      }
    );
  };

  handleHeardAboutOtherChange = event => {
    this.setState(
      { heardAbout: event.target.value, heardAboutOther: false },
      () => {
        if (this.state.heardAbout === "Other") {
          this.setState({ heardAboutOther: true });
        } else {
          this.props.sendData(this.state);
        }
      }
    );

  };



  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <div className="signupForm">
          <div className="signupDiv">
            <label htmlFor="payroll">
              Do you currently have a payroll provider?
            </label>
            <select
              name="payroll"
              className="signupInputDrop"
              onChange={this.handlePayrollChange}
              value={this.state.payroll}
            >
              <option disabled selected>
                Please Select
              </option>
              <option>No, we do it manually</option>
              <option>Yes</option>
            </select>
          </div>
          <div className="signupDiv">
            <label htmlFor="provider">If yes, Select Your Provider</label>
            <select
              name="provider"
              className="signupInputDrop"
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
            {this.state.providerOther ? this.providerOther() : null}
          </div>
          <div className="signupDiv">
            <label htmlFor="heardAbout">
              How Do you hear about SaveAway401k?
            </label>
            <select
              name="heardAbout"
              className="signupInputDrop"
              onChange={this.handleHeardAboutOtherChange}
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
            {this.state.heardAboutOther ? this.heardAboutOther() : null}
          </div>
          <br />
          <hr />
        </div>
        <hr className="mutliStepLine"/>
      </div>
    );
  }
}
