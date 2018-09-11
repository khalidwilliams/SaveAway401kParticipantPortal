"use strict";
import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      Admin: "",
      PlanStatus: "",
      adminOther: false,
      AdminName: "",
      AdminPhone: "",
      AdminEmail: ""
    };
  }

  adminOther = () => {
    return (
      <div className="signupForm">
        <label htmlFor="Admin">Please Provide Admin Info</label>
        <input
          type="text"
          name="AdminName"
          className="signupInput"
          onChange={this.handleAdminName}
          placeholder="Name"
          value={this.state.AdminName}
        />
        <input
          type="text"
          name="AdminPhone"
          className="signupInput"
          onChange={this.handleAdminPhone}
          placeholder="Phone"
          value={this.state.AdminPhone}
        />
        <input
          type="text"
          name="AdminEmail"
          className="signupInput"
          onChange={this.handleAdminEmail}
          placeholder="Email"
          value={this.state.AdminEmail}
        />
      </div>
    );
  };

  handlePlanStatusChange = event => {
    this.setState({ PlanStatus: event.target.value }, () => {
      this.props.sendData(this.state);
    });
  };

  handleOtherAdminChange = event => {
    this.setState({ Admin: event.target.value, adminOther: false }, () => {
      if (this.state.Admin === "No, it will be someone else") {
        this.setState({ adminOther: true });
      } else {
        this.props.sendData(this.state);
      }
    });
  };

  handleAdminChange = event => {
    this.setState({ Admin: event.target.value });
  };

  handleAdminName = event => {
    this.setState({
      AdminName: event.target.value
    });
  };

  handleAdminPhone = event => {
    this.setState({
      AdminPhone: event.target.value
    });
  };

  handleAdminEmail = event => {
    this.setState({
      AdminEmail: event.target.value
    });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <div className="signupForm">
          <div className="signupDiv">
            <label htmlFor="Admin">
              Will you be the Administrator of the plan?
            </label>
            <select
              name="Admin"
              className="signupInputDrop"
              onChange={this.handleOtherAdminChange}
              value={this.state.Admin}
            >
              <option value="" disabled selected>
                Please Select Yes or No
              </option>
              <option>Yes, use my contact information as primary</option>
              <option>No, it will be someone else</option>
            </select>
            {this.state.adminOther ? this.adminOther() : null}
          </div>
          <div className="signupDiv">
            <label htmlFor="PlanStatus">
              Does your company have a 401k plan now?
            </label>
            <select
              name="PlanStatus"
              className="signupInputDrop"
              onChange={this.handlePlanStatusChange}
              value={this.state.PlanStatus}
            >
              <option value="" disabled selected>
                Please Select Yes or No
              </option>
              <option>No, this is a new plan</option>
              <option>Yes, we will roll it over to SaveAway401k</option>
            </select>
          </div>
          <br />
          <hr />
        </div>
        <hr className="mutliStepLine" />
      </div>
    );
  }
}
