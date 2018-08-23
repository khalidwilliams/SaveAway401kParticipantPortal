"use strict";
import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      Admin: "",
      PlanStatus: ""
    };
  }

  handleAdminChange = event => {
    this.setState({ Admin: event.target.value });
  };

  handlePlanStatusChange = event => {
    this.setState({ PlanStatus: event.target.value });
  };
  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <div id="signup-form">
          <div id="signupDiv">
            <label htmlFor="Admin">
              Will you be the Administrator of the plan?
            </label>
            <select
              name="Admin"
              id="signupInputDrop"
              onChange={this.handleAdminChange}
              value={this.state.Admin}
            >
              <option value="" disabled selected>
                Please Select Yes or No
              </option>
              <option>Yes, use my contact information as primary</option>
              <option>No, It will be someone else</option>
            </select>
          </div>
          <div id="signupDiv">
            <label htmlFor="PlanStatus">
              Does your company have a 401k plan now?
            </label>
            <select
              name="PlanStatus"
              id="signupInputDrop"
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
        <hr />
      </div>
    );
  }
}
