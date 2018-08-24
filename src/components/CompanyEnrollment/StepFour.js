import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import SimpleStorage, { resetParentState } from "../../stores/SimpleStorage";

var baseURL = "https://saveawaytest.herokuapp.com/";

const Confirm = ({ history }) =>
  <div>
    <h1>Confirm Info</h1>
    <StepFour history={history} />
  </div>

class StepFour extends Component {
  constructor(props) {
    let companyName = JSON.parse(window.localStorage._companyName);
    let accountName = JSON.parse(window.localStorage._accountName);
    let signupEmail = JSON.parse(window.localStorage._signupEmail);
    let companyPhone = JSON.parse(window.localStorage._companyPhone);
    let signupAdressStreet = JSON.parse(
      window.localStorage._signupAdressStreet
    );
    let signupAdressApt = JSON.parse(window.localStorage._signupAdressApt);
    let signupAdressCity = JSON.parse(window.localStorage._signupAdressCity);
    let signupAdressState = JSON.parse(window.localStorage._signupAdressState);
    let signupAdressZip = JSON.parse(window.localStorage._signupAdressZip);
    let companyEIN = JSON.parse(window.localStorage._companyEIN);
    let businessHours = JSON.parse(window.localStorage._businessHours);
    let AutoEnroll = JSON.parse(window.localStorage._AutoEnroll);
    let enrollmentPercentage = JSON.parse(
      window.localStorage._enrollmentPercentage
    );
    let planType = JSON.parse(window.localStorage._planType);
    let provider = JSON.parse(window.localStorage._provider);
    let paymentCycle = JSON.parse(window.localStorage._paymentCycle);
    let Admin = JSON.parse(window.localStorage._Admin);
    let AdminName = JSON.parse(window.localStorage._AdminName);
    let AdminPhone = JSON.parse(window.localStorage._AdminPhone);
    let AdminEmail = JSON.parse(window.localStorage._AdminEmail);
    let PlanStatus = JSON.parse(window.localStorage._PlanStatus);
    super(props);
    this.state = {
      redirect: false,
      companyName: companyName,
      accountName: accountName,
      signupEmail: signupEmail,
      companyPhone: companyPhone,
      signupAdressStreet: signupAdressStreet,
      signupAdressApt: signupAdressApt,
      signupAdressCity: signupAdressCity,
      signupAdressState: signupAdressState,
      signupAdressZip: signupAdressZip,
      companyEIN: companyEIN,
      businessHours: businessHours,
      AutoEnroll: AutoEnroll,
      enrollmentPercentage: enrollmentPercentage,
      planType: planType,
      provider: provider,
      paymentCycle: paymentCycle,
      Admin: Admin,
      AdminName: AdminName,
      AdminPhone: AdminPhone,
      AdminEmail: AdminEmail,
      PlanStatus: PlanStatus
    };
  }

  getCompanyInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      companyName: data.get("companyName"),
      accountName: data.get("accountName"),
      companyPhone: data.get("companyPhone"),
      signupEmail: data.get("signupEmail"),
      signupAdressStreet: data.get("signupAdressStreet"),
      signupAdressApt: data.get("signupAdressApt"),
      signupAdressCity: data.get("signupAdressCity"),
      signupAdressState: data.get("signupAdressState"),
      signupAdressZip: data.get("signupAdressZip"),
      companyEIN: data.get("companyEIN"),
      businessHours: data.get("businessHours"),
      AutoEnroll: data.get("AutoEnroll"),
      enrollmentPercentage: data.get("enrollmentPercentage"),
      planType: data.get("planType"),
      provider: data.get("provider"),
      paymentCycle: data.get("paymentCycle"),
      Admin: data.get("Admin"),
      AdminName: data.get("AdminName"),
      AdminPhone: data.get("AdminPhone"),
      AdminEmail: data.get("AdminEmail"),
      PlanStatus: data.get("PlanStatus")
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/companyEnrollment", {
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
    fetch(baseURL + "companyEnrollment", {
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
          <div id="formSection">
            <div id="formAnswer">
              <label htmlFor="companyName">Company Name</label>
              <input
                id="formInput"
                name="companyName"
                defaultValue={this.state.companyName}
              />
              <label htmlFor="companyPhone">Company Phone Number</label>
              <input
                id="formInput"
                name="companyPhone"
                defaultValue={this.state.companyPhone}
              />
            </div>
          </div>
          <br />
          <div id="formSection">
            <div id="formAnswer">
              <label htmlFor="accountName">Your Name</label>
              <input
                id="formInput"
                name="accountName"
                defaultValue={this.state.accountName}
              />
              <label htmlFor="signupEmail">Your Email</label>
              <input
                id="formInput"
                name="signupEmail"
                defaultValue={this.state.signupEmail}
              />
            </div>
          </div>
          <br />
          <div id="formSection">
            <label htmlFor="signupAdress">Company Adress</label>
            <hr />
            <div id="formAnswer">
              <label htmlFor="signupAdressStreet">Street </label>
              <input
                id="formInput"
                name="signupAdressStreet"
                defaultValue={this.state.signupAdressStreet}
              />
              <label htmlFor="signupAdressApt">Apt, Unit, Floor</label>
              <input
                id="formInput"
                name="signupAdressApt"
                defaultValue={this.state.signupAdressApt}
              />
            </div>
            <br />
            <div id="formAnswer">
              <label htmlFor="signupAdressCity">City</label>
              <input
                id="formInput"
                name="signupAdressCity"
                defaultValue={this.state.signupAdressCity}
              />
              <label htmlFor="signupAdressState">State</label>
              <input
                id="formInput"
                name="signupAdressState"
                defaultValue={this.state.signupAdressState}
              />
              <label htmlFor="signupAdressZip">Zip Code</label>
              <input
                id="formInput"
                name="signupAdressZip"
                defaultValue={this.state.signupAdressZip}
              />
            </div>
          </div>
          <br />
          <div id="formSection">
            <div id="formAnswer">
              <label htmlFor="companyEIN">Company Tax Number (EIN)</label>
              <input
                id="formInput"
                name="companyEIN"
                defaultValue={this.state.companyEIN}
              />
              <label htmlFor="businessHours">Business Hours</label>
              <input
                id="formInput"
                name="businessHours"
                defaultValue={this.state.businessHours}
              />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div id="formSection2">
            <div id="formAnswer">
              <label htmlFor="AutoEnroll">
                Would you like to Auto Enroll Employees?
              </label>
              <input
                id="formInput"
                name="AutoEnroll"
                defaultValue={this.state.AutoEnroll}
              />
              <label htmlFor="planType">Plan Type</label>
              <input
                id="formInput"
                name="planType"
                defaultValue={this.state.planType}
              />
            </div>
            <hr />
            <div id="formAnswer">
              <label htmlFor="enrollmentPercentage">
                Auto Enrollment Percentage
              </label>
              <input
                id="formInput"
                name="enrollmentPercentage"
                defaultValue={this.state.enrollmentPercentage}
              />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div id="formSection2">
            <div id="formAnswer">
              <label htmlFor="provider">Payroll Provider</label>
              <input
                id="formInput"
                name="provider"
                defaultValue={this.state.provider}
              />
              <label htmlFor="paymentCycle">Payment Cycle</label>
              <input
                id="formInput"
                name="paymentCycle"
                defaultValue={this.state.paymentCycle}
              />
            </div>
          </div>
          <div id="formSection2">
            <div id="formAnswer">
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
            <label>
              If you will not be the administrator, this is the administrator
              information. <br />
              ***Note: it will be blank if you are the admin.
            </label>
            <div id="adminOtherInputs">
              <input
                id="formInput"
                name="AdminName"
                defaultValue={this.state.AdminName}
              />
              <input
                id="formInput"
                name="AdminPhone"
                defaultValue={this.state.AdminPhone}
              />
              <input
                id="formInput"
                name="AdminEmail"
                defaultValue={this.state.AdminEmail}
              />
            </div>
            <hr />
            <div id="formAnswer">
              <label htmlFor="PlanStatus">
                Does your company have a 401k plan now?
              </label>
              <input
                id="formInput"
                name="PlanStatus"
                defaultValue={this.state.PlanStatus}
              />
            </div>
          </div>
          <br />
          <hr />
          <div id="multiPageSubmit">
            <input
              type="submit"
              id="submitButtonMulti"
              defaultValue="Submit Your Enrollment"
            />
          </div>

          <hr />
        </form>
      </div>
    );
  }
}

export default withRouter(Confirm);
export { StepFour };
