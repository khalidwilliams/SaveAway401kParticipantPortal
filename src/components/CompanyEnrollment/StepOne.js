import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepOne extends React.Component {
  constructor() {
    super();
    this.state = {
      signupName: "",
      signupEmail: "",
      signupPhone: "",
      signupAdressStreet: "",
      signupAdressApt: "",
      signupAdressCity: "",
      signupAdressState: "",
      signupAdressZip: "",
      adminName: "",
      adminPhone: "",
      companyEIN: "",
      businessHours: ""
    };
    this.initialState = this.state;
  }

  handleNameChange = event => {
    this.setState({
      signupName: event.target.value
    });
  };

  handlePhoneChange = event => {
    this.setState({
      signupPhone: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      signupEmail: event.target.value
    });
  };

  handleAdressStreetChange = event => {
    this.setState({ signupAdressStreet: event.target.value });
  };

  handleAdressAptChange = event => {
    this.setState({ signupAdressApt: event.target.value });
  };

  handleAdressCityChange = event => {
    this.setState({ signupAdressCity: event.target.value });
  };

  handleStateChange = event => {
    this.setState({ signupAdressState: event.target.value });
  };

  handleAdressZipChange = event => {
    this.setState({ signupAdressZip: event.target.value });
  };

  handleAdminNameChange = event => {
    this.setState({ adminName: event.target.value });
  };

  handleAdminPhoneChange = event => {
    this.setState({ adminPhone: event.target.value });
  };

  handleCompanyEINChange = event => {
    this.setState({ companyEIN: event.target.value });
  };

  handleBusinessHoursChange = event => {
    this.setState({ businessHours: event.target.value });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <h2 id="formHeader">
          Please Fill Out Your Administrator and Company Information
        </h2>
        <div id="formSection">
          <label htmlFor="signupName">Company Name</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.signupName}
            onChange={this.handleNameChange}
            name="signupName"
          />
          <label htmlFor="signupPhone">Company Phone Number</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.signupPhone}
            onChange={this.handlePhoneChange}
            name="signupPhone"
          />
        </div>
        <br />
        <div id="formSection">
          <label htmlFor="adminName">401k Administrator Name</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.adminName}
            onChange={this.handleAdminNameChange}
            name="adminName"
          />
          <label htmlFor="signupEmail">Administrator Email</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.signupEmail}
            onChange={this.handleEmailChange}
            name="signupEmail"
          />
        </div>
        <br />
        <div id="formSection">
          <label>Company Adress</label>
          <hr />
          <label htmlFor="signupAdressStreet">Street </label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.signupAdressStreet}
            onChange={this.handleAdressStreetChange}
            name="signupAdressStreet"
          />
          <label htmlFor="signupAdressApt">Apt, Unit, Floor</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.signupAdressApt}
            onChange={this.handleAdressAptChange}
            name="signupAdressApt"
          />
          <br />
          <label htmlFor="signupAdressCity">City</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.signupAdressCity}
            onChange={this.handleAdressCityChange}
            name="signupAdressCity"
          />
          <label htmlFor="signupAdressState">State</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.signupAdressState}
            onChange={this.handleStateChange}
            name="signupAdressState"
          />
          <label htmlFor="signupAdressZip">Zip Code</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.signupAdressZip}
            onChange={this.handleAdressZipChange}
            name="signupAdressZip"
          />
        </div>
        <br />
        <div id="formSection">
          <label htmlFor="companyEIN">Company Tax Number (EIN)</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.companyEIN}
            onChange={this.handleCompanyEINChange}
            name="companyEIN"
          />
          <label htmlFor="businessHours">Business Hours</label>
          <input
            type="text"
            id="shorterInput"
            value={this.state.businessHours}
            onChange={this.handleBusinessHoursChange}
            name="businessHours"
          />
        </div>
        <br />
        <hr />
      </div>
    );
  }
}
