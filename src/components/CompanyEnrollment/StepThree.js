import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      Admin: "",
      PlanStatus: ""
    };
    this.initialState = this.state;
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
        <h2 id="formHeader">
          Please Indicate Your Administrator and Current Plan
        </h2>
        <div id="formSection2">
          <label htmlFor="Admin">
            Will you be the Administrator of the plan?
          </label>
          <select
            name="Admin"
            onChange={this.handleAdminChange}
            value={this.state.Admin}
            id="signupInputDrop"
          >
            <option value="" disabled selected>
              Please Select Yes or No
            </option>
            <option>Yes, use my contact information as primary</option>
            <option>No, It will be someone else</option>
          </select>
          <hr />
          <label htmlFor="PlanStatus">
            Does your company have a 401k plan now?
          </label>
          <select
            name="PlanStatus"
            onChange={this.handlePlanStatusChange}
            value={this.state.PlanStatus}
            id="signupInputDrop"
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
    );
  }
}
