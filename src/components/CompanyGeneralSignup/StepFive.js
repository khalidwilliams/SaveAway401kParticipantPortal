import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import SimpleStorage, { resetParentState } from "../../stores/SimpleStorage";

var baseURL = "https://saveawaytest.herokuapp.com/";

const Confirm = ({ history }) => (
  <div>
    <h1>Confirm Info</h1>
    <StepFive history={history} />
  </div>
);

class StepFive extends Component {
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
    let AdminName = JSON.parse(window.localStorage._AdminName);
    let AdminPhone = JSON.parse(window.localStorage._AdminPhone);
    let AdminEmail = JSON.parse(window.localStorage._AdminEmail);
    let PlanStatus = JSON.parse(window.localStorage._PlanStatus);
    let checked = true;
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
      AdminName: AdminName,
      AdminPhone: AdminPhone,
      AdminEmail: AdminEmail,
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
      AdminName: data.get("AdminName"),
      AdminPhone: data.get("AdminPhone"),
      AdminEmail: data.get("AdminEmail"),
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
    const { history } = this.props;
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
        <h2 className="formHeader">
          Please Confirm and Submit Your Information
        </h2>
        <form onSubmit={this.addCompanyInfo}>
          <div className="signupForm">
            <div className="signupDiv">
              <label htmlFor="FullName">Full Name:</label>
              <input
                className="formInput"
                name="FullName"
                defaultdefaultValue={this.state.FullName}
              />
              <label htmlFor="CompanyName">Company Name:</label>
              <input
                className="formInput"
                name="CompanyName"
                defaultValue={this.state.CompanyName}
              />
            </div>
            <hr />
            <div className="signupDiv">
              <label htmlFor="CompanyEmail">Email Adress:</label>
              <input
                className="formInput"
                name="CompanyEmail"
                defaultValue={this.state.CompanyEmail}
              />
              <label htmlFor="CompanyPhone">Company Phone Number:</label>
              <input
                className="formInput"
                name="CompanyPhone"
                defaultValue={this.state.CompanyPhone}
              />
            </div>
            <hr />
            <div>
              <label htmlFor="State">State You Operate Within:</label>
              <input
                className="formInput"
                name="State"
                defaultValue={this.state.State}
              />
              <label htmlFor="EmployeeNumber">Number of employees:</label>
              <input
                className="formInput"
                name="EmployeeNumber"
                defaultValue={this.state.EmployeeNumber}
              />
            </div>
          </div>
          <br />
          <div className="signupForm">
            <div className="signupDiv">
              <label htmlFor="payroll">
                Do you currently have a payroll provider:
              </label>
              <input
                className="formInput"
                name="payroll"
                defaultValue={this.state.payroll}
              />
            </div>
            <div className="signupDiv">
              <label htmlFor="provider">If yes, your provider is:</label>
              <input
                className="formInput"
                name="provider"
                defaultValue={this.state.provider}
              />
            </div>
            <div>
              <label htmlFor="heardAbout">
                You heard about SaveAway401k from:
              </label>
              <input
                className="formInput"
                name="heardAbout"
                defaultValue={this.state.heardAbout}
              />
            </div>
          </div>
          <br />
          <div className="signupForm">
            <div className="signupDiv">
              <label htmlFor="Admin">
                Will you be the Administrator of the plan?
              </label>
              <input
                className="formInput"
                name="Admin"
                defaultValue={this.state.Admin}
              />
            </div>
            <hr />
            <label>
              If you will not be the administrator, this is the administrator
              information. <br />
              ***Note: it will be blank if you are the admin.
            </label>
            <div className="adminOtherInputs">
              <input
                className="formInput"
                name="AdminName"
                defaultValue={this.state.AdminName}
              />
              <input
                className="formInput"
                name="AdminPhone"
                defaultValue={this.state.AdminPhone}
              />
              <input
                className="formInput"
                name="AdminEmail"
                defaultValue={this.state.AdminEmail}
              />
            </div>
            <hr />
            <div className="signupDiv">
              <label htmlFor="PlanStatus">
                Does your company have a 401k plan now?
              </label>
              <input
                className="formInput"
                name="PlanStatus"
                defaultValue={this.state.PlanStatus}
              />
            </div>
            <br />
            <div>
              <label htmlFor="checked">
                You agree to the terms? Check Box if Yes
              </label>
              <input
                className="formInput"
                name="checked"
                type="checkbox"
                checked={true}
                autoFocus
              />
            </div>
          </div>
          <br />
          <hr />
          <div className="multiPageSubmit">
            <input
              type="submit"
              className="submitButton"
              defaultValue="Signup for your Account"
            />
          </div>
          <hr />
        </form>
      </div>
    );
  }
}

export default withRouter(Confirm);
export { StepFive };
