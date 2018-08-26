"use strict";
import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      payroll: "",
      provclassNameer: "",
      heardAbout: "",
      provclassNameerOther: false,
      heardAboutOther: false
    };
  }

  provclassNameerOther = () => {
    return (
      <div className="signupForm">
        <label htmlFor="provclassNameer">Please indicate your provider</label>
        <input
          type="text"
          name="provclassNameer"
          className="signupInput"
          onChange={this.handleProvclassNameerChange}
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

  handleProvclassNameerChange = event => {
    this.setState({ provclassNameer: event.target.value });
  };

  handleHeardAboutChange = event => {
    this.setState({ heardAbout: event.target.value });
  };

  handleOtherProvclassNameerChange = event => {
    this.setState(
      { provclassNameer: event.target.value, provclassNameerOther: false },
      () => {
        if (this.state.provclassNameer === "Other") {
          this.setState({ provclassNameerOther: true });
        }
      }
    );
  };

  handleHeardAboutProvclassNameerChange = event => {
    this.setState(
      { heardAbout: event.target.value, heardAboutOther: false },
      () => {
        if (this.state.heardAbout === "Other") {
          this.setState({ heardAboutOther: true });
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
              Do you currently have a payroll provclassNameer?
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
            <label htmlFor="provclassNameer">If yes, Select Your ProvclassNameer</label>
            <select
              name="provclassNameer"
              className="signupInputDrop"
              onChange={this.handleOtherProvclassNameerChange}
              value={this.state.provclassNameer}
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
            {this.state.provclassNameerOther ? this.provclassNameerOther() : null}
          </div>
          <div className="signupDiv">
            <label htmlFor="heardAbout">
              How Do you hear about SaveAway401k?
            </label>
            <select
              name="heardAbout"
              className="signupInputDrop"
              onChange={this.handleHeardAboutProvclassNameerChange}
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
