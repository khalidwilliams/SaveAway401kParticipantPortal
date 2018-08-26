import React from "react";
import SimpleStorage from "../../stores/SimpleStorage";

export class StepOne extends React.Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      accountName: "",
      signupEmail: "",
      companyPhone: "",
      signupAdressStreet: "",
      signupAdressApt: "",
      signupAdressCity: "",
      signupAdressState: "",
      signupAdressZip: "",
      companyEIN: "",
      businessHours: ""
    };
    this.initialState = this.state;
  }

  handleNameChange = event => {
    this.setState({
      companyName: event.target.value
    });
  };

  handleAdminNameChange = event => {
    this.setState({ accountName: event.target.value });
  };

  handlePhoneChange = event => {
    this.setState({
      companyPhone: event.target.value
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
        <h2 className="formHeader">
          Please Fill Out Your Administrator and Company Information
        </h2>
        <div className="formSection">
          <label htmlFor="signupName">Company Name</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.companyName}
            onChange={this.handleNameChange}
            name="signupName"
          />
          <label htmlFor="signupPhone">Company Phone Number</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.companyPhone}
            onChange={this.handlePhoneChange}
            name="signupPhone"
          />
        </div>
        <br />
        <div className="formSection">
          <label htmlFor="accountName">Your Name</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.accountName}
            onChange={this.handleAdminNameChange}
            name="accountName"
          />
          <label htmlFor="signupEmail">Your Company Email</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.signupEmail}
            onChange={this.handleEmailChange}
            name="signupEmail"
          />
        </div>
        <br />
        <div className="formSection">
          <label>Company Adress</label>
          <hr />
          <label htmlFor="signupAdressStreet">Street </label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.signupAdressStreet}
            onChange={this.handleAdressStreetChange}
            name="signupAdressStreet"
          />
          <label htmlFor="signupAdressApt">Apt, Unit, Floor</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.signupAdressApt}
            onChange={this.handleAdressAptChange}
            name="signupAdressApt"
          />
          <br />
          <label htmlFor="signupAdressCity">City</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.signupAdressCity}
            onChange={this.handleAdressCityChange}
            name="signupAdressCity"
          />
          <label htmlFor="signupAdressState">State</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.signupAdressState}
            onChange={this.handleStateChange}
            name="signupAdressState"
          />
          <label htmlFor="signupAdressZip">Zip Code</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.signupAdressZip}
            onChange={this.handleAdressZipChange}
            name="signupAdressZip"
          />
        </div>
        <br />
        <div className="formSection">
          <label htmlFor="companyEIN">Company Tax Number (EIN)</label>
          <input
            type="text"
            className="shorterInput"
            value={this.state.companyEIN}
            onChange={this.handleCompanyEINChange}
            name="companyEIN"
          />
          <label htmlFor="businessHours">Business Hours</label>
          <input
            type="text"
            className="shorterInput"
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
