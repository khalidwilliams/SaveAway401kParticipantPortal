import React from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import SimpleStorage, { resetParentState } from "../../stores/SimpleStorage";

var baseURL = "https://saveawaytest.herokuapp.com/";

export class StepFour extends React.Component {
  constructor(props) {
    let signupName = JSON.parse(window.localStorage._signupName);
    console.log(localStorage.getItem('signupName'));
    console.log(window.localStorage._signupName);
    let signupPhone = JSON.parse(window.localStorage._signupPhone);
    let signupEmail = JSON.parse(window.localStorage._signupEmail);
    let signupAdressStreet = JSON.parse(
      localStorage.getItem("signupAdressStreet")
    );
    let signupAdressApt = JSON.parse(window.localStorage._signupAdressApt);
    let signupAdressCity = JSON.parse(window.localStorage._signupAdressCity);
    let signupAdressState = JSON.parse(
      window.localStorage._signupAdressState
    );
    let signupAdressZip = JSON.parse(window.localStorage._signupAdressZip);
    let adminName = JSON.parse(window.localStorage._adminName);
    let companyEIN = JSON.parse(window.localStorage._companyEIN);
    let businessHours = JSON.parse(window.localStorage._businessHours);
    let AutoEnroll = JSON.parse(window.localStorage._AutoEnroll);
    let enrollmentPercentage = JSON.parse(
      window.localStorage._enrollmentPercentage
    );
    let planType = JSON.parse(window.localStorage._planType);
    let payrollProvider = JSON.parse(window.localStorage._payrollProvider);
    let paymentCycle = JSON.parse(window.localStorage._paymentCycle);
    let Admin = JSON.parse(window.localStorage._Admin);
    let PlanStatus = JSON.parse(window.localStorage._PlanStatus);
    super(props);
    this.state = {
      redirect: false,
      signupName: signupName,
      signupPhone: signupPhone,
      signupEmail: signupEmail,
      signupAdressStreet: signupAdressStreet,
      signupAdressApt: signupAdressApt,
      signupAdressCity: signupAdressCity,
      signupAdressState: signupAdressState,
      signupAdressZip: signupAdressZip,
      adminName: adminName,
      companyEIN: companyEIN,
      businessHours: businessHours,
      AutoEnroll: AutoEnroll,
      enrollmentPercentage: enrollmentPercentage,
      planType: planType,
      payrollProvider: payrollProvider,
      paymentCycle: paymentCycle,
      Admin: Admin,
      PlanStatus: PlanStatus
    };
  }

  getCompanyInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      signupName: data.get("signupName"),
      signupPhone: data.get("signupPhone"),
      signupEmail: data.get("signupEmail"),
      signupAdressStreet: data.get("signupAdressStreet"),
      signupAdressApt: data.get("signupAdressApt"),
      signupAdressCity: data.get("signupAdressCity"),
      signupAdressState: data.get("signupAdressState"),
      signupAdressZip: data.get("signupAdressZip"),
      adminName: data.get("adminName"),
      companyEIN: data.get("companyEIN"),
      businessHours: data.get("businessHours"),
      AutoEnroll: data.get("AutoEnroll"),
      enrollmentPercentage: data.get("enrollmentPercentage"),
      planType: data.get("planType"),
      payrollProvider: data.get("payrollProvider"),
      paymentCycle: data.get("paymentCycle"),
      Admin: data.get("Admin"),
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
      .then(this.setState({ redirect: true }, () => {
        console.log(this.state.redirect);
      }))
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
              <label htmlFor="signupName">Company Name</label>
              <input
                id="formInput"
                name="signupName"
                defaultValue={this.state.signupName}
              />
              <label htmlFor="signupPhone">Company Phone Number</label>
              <input
                id="formInput"
                name="signupPhone"
                defaultValue={this.state.signupPhone}
              />
            </div>
          </div>
          <br />
          <div id="formSection">
            <div id="formAnswer">
              <label htmlFor="adminName">401k Administrator Name</label>
              <input
                id="formInput"
                name="adminName"
                defaultValue={this.state.adminName}
              />
              <label htmlFor="signupEmail">Administrator Email</label>
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
              <label htmlFor="payrollProvider">Payroll Provider</label>
              <input
                id="formInput"
                name="payrollProvider"
                defaultValue={this.state.payrollProvider}
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
