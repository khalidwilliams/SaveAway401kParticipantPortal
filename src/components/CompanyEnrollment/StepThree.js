import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepThree extends React.Component {
  constructor() {
    super();
    this.state = {
      Admin: "",
      PlanStatus: "",
      adminOtherTwo: false,
      AdminName: "",
      AdminPhone: "",
      AdminEmail: ""
    };
    this.initialState = this.state;
  }

  adminOtherTwo = () => {
    return (
      <div>
        <label htmlFor="Admin">Please Provide Admin Info</label>
        <input
          type="text"
          name="AdminName"
          id="signupInput"
          onChange={this.handleAdminOtherForm}
          placeholder="Name"
        />
        <input
          type="text"
          name="AdminPhone"
          id="signupInput"
          onChange={this.handleAdminOtherForm}
          placeholder="Phone"
        />
        <input
          type="text"
          name="AdminEmail"
          id="signupInput"
          onChange={this.handleAdminOtherForm}
          placeholder="Email"
        />
      </div>
    );
  };

  handleAdminChange = event => {
    this.setState({ Admin: event.target.value });
  };

  handlePlanStatusChange = event => {
    this.setState({ PlanStatus: event.target.value });
  };

  handleOtherAdminChangeTwo = event => {
    this.setState({ Admin: event.target.value, adminOtherTwo: false }, () => {
      if (this.state.Admin === "No, it will be someone else") {
        this.setState({ adminOtherTwo: true });
      }
    });
  };

  handleAdminOtherFormTwo = event => {
    this.setState({
      AdminName: event.target.value,
      AdminPhone: event.target.value,
      AdminEmail: event.target.value
    });
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
            onChange={this.handleOtherAdminChangeTwo}
            value={this.state.Admin}
            id="signupInputDrop"
          >
            <option value="" disabled selected>
              Please Select Yes or No
            </option>
            <option>Yes, use my contact information as primary</option>
            <option>No, it will be someone else</option>
          </select>
          {this.state.adminOtherTwo ? this.adminOtherTwo() : null}
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
