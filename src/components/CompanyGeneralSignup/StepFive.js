import React from "react";
import {
  BrowserRouter as
  Redirect
} from "react-router-dom";
import SimpleStorage, { resetParentState } from "../../stores/SimpleStorage";

var baseURL = "https://saveawaytest.herokuapp.com/";

export class StepFive extends React.Component {
  constructor(props) {
    let FullName = JSON.parse(window.localStorage._FullName);
    let CompanyEmail = JSON.parse(window.localStorage._CompanyEmail);
    let State = JSON.parse(window.localStorage._State);
    let CompanyName = JSON.parse(window.localStorage._CompanyName);
    let CompanyPhone = JSON.parse(window.localStorage._CompanyPhone);
    let EmployeeNumber = JSON.parse(window.localStorage._EmployeeNumber);
    let payroll = JSON.parse(window.localStorage._payroll);
    let provider = JSON.parse(window.localStorage._provider);
    let heardAbout = JSON.parse(window.localStorage._heardAbout);
    let Admin = JSON.parse(window.localStorage._Admin);
    let PlanStatus = JSON.parse(window.localStorage._PlanStatus);
    let checked = JSON.parse(window.localStorage._checked);
    super(props);
    this.state = {
      redirect: false,
      FullName: FullName,
      CompanyEmail: CompanyEmail,
      State: State,
      CompanyName: CompanyName,
      CompanyPhone: CompanyPhone,
      EmployeeNumber: EmployeeNumber,
      payroll: payroll,
      provider: provider,
      heardAbout: heardAbout,
      Admin: Admin,
      PlanStatus: PlanStatus,
      checked: checked
    };
  }

  getCompanyInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      FullName: data.get("FullName"),
      CompanyEmail: data.get("CompanyEmail"),
      State: data.get("State"),
      CompanyName: data.get("CompanyName"),
      CompanyPhone: data.get("CompanyPhone"),
      EmployeeNumber: data.get("EmployeeNumber"),
      payroll: data.get("payroll"),
      provider: data.get("provider"),
      heardAbout: data.get("heardAbout"),
      Admin: data.get("Admin"),
      PlanStatus: data.get("PlanStatus"),
      checked: data.get("checked")
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/basicInfo", {
      method: "post",
      body: JSON.stringify(this.getCompanyInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
  };

  addCompanyInfo = event => {
    event.preventDefault();
    console.log(this.getCompanyInfo(event));
    fetch(baseURL + "basicInfo", {
      method: "post",
      body: JSON.stringify(this.getCompanyInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(this.sendMessage(event))
      .then(resetParentState(this, this.initialState))
      .then(this.setState({ redirect: true }))
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/Confirmation" />;
    }
    return (
      <div>
        <SimpleStorage parent={this} />
        <h2 id="formHeader">Please Confirm and Submit Your Information</h2>
        <form onSubmit={this.addCompanyInfo}>
          <div id="signup-form">
            <div id="signupDiv">
              <label htmlFor="FullName">Full Name:</label>
              <input
                id="formInput"
                name="FullName"
                defaultdefaultValue={this.state.FullName}
              />
              <label htmlFor="CompanyName">Company Name:</label>
              <input
                id="formInput"
                name="CompanyName"
                defaultValue={this.state.CompanyName}
              />
            </div>
            <hr />
            <div id="signupDiv">
              <label htmlFor="CompanyEmail">Email Adress:</label>
              <input
                id="formInput"
                name="CompanyEmail"
                defaultValue={this.state.CompanyEmail}
              />
              <label htmlFor="CompanyPhone">Company Phone Number:</label>
              <input
                id="formInput"
                name="CompanyPhone"
                defaultValue={this.state.CompanyPhone}
              />
            </div>
            <hr />
            <div>
              <label htmlFor="State">State You Operate Within:</label>
              <input
                id="formInput"
                name="State"
                defaultValue={this.state.State}
              />
              <label htmlFor="EmployeeNumber">Number of employees:</label>
              <input
                id="formInput"
                name="EmployeeNumber"
                defaultValue={this.state.EmployeeNumber}
              />
            </div>
          </div>
          <br />
          <div id="signup-form">
            <div id="signupDiv">
              <label htmlFor="payroll">
                Do you currently have a payroll provider:
              </label>
              <input
                id="formInput"
                name="payroll"
                defaultValue={this.state.payroll}
              />
            </div>
            <div id="signupDiv">
              <label htmlFor="provider">If yes, your provider is:</label>
              <input
                id="formInput"
                name="provider"
                defaultValue={this.state.provider}
              />
            </div>
            <div>
              <label htmlFor="heardAbout">
                You heard about SaveAway401k from:
              </label>
              <input
                id="formInput"
                name="heardAbout"
                defaultValue={this.state.heardAbout}
              />
            </div>
          </div>
          <br />
          <div id="signup-form">
            <div id="signupDiv">
              <label htmlFor="Admin">
                Will you be the Administrator of the plan?
              </label>
              <input
                id="formInput"
                name="Admin"
                defaultValue={this.state.Admin}
              />
            </div>
            <hr />
            <div id="signupDiv">
              <label htmlFor="PlanStatus">
                Does your company have a 401k plan now?
              </label>
              <input
                id="formInput"
                name="PlanStatus"
                defaultValue={this.state.PlanStatus}
              />
            </div>
            <br />
            <div id="signupDiv">
              <label htmlFor="checked">
                You agree to the terms? Check Box if Yes
              </label>
              <input
                id="formInput"
                name="checked"
                type="checkbox"
                checked={true}
                autoFocus
              />
            </div>
          </div>
          <br />
          <hr />
          <div id="multiPageSubmit">
            <input
              type="submit"
              id="submitButtonMulti"
              defaultValue="Signup for your Account"
            />
          </div>
          <hr />
        </form>
      </div>
    );
  }
}
