import React from "react";
import Modal from "react-modal";
import SimpleStorage from "../../stores/SimpleStorage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export class StepTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      AutoEnroll: "",
      enrollmentPercentage: "",
      planType: "",
      payrollProvider: "",
      paymentCycle: "",
      modalIsOpen: false
    };
    this.initialState = this.state;
    Modal.setAppElement(document.body);
  }

  handleAutoEnrollChange = event => {
    this.setState({ AutoEnroll: event.target.value });
  };

  handlePercentageChange = event => {
    this.setState({ enrollmentPercentage: event.target.value });
  };

  handlePlanChange = event => {
    this.setState({ planType: event.target.value });
  };

  handleProviderChange = event => {
    this.setState({ payrollProvider: event.target.value });
  };

  handlePaymentCycleChange = event => {
    this.setState({ paymentCycle: event.target.value });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <h2 id="formHeader">Please Indicate Your Enrollment Preferences</h2>
        <div id="formSection2">
          <label htmlFor="AutoEnroll">
            Would you like to Auto Enroll Employees?
          </label>
          <select
            name="AutoEnroll"
            onChange={this.handleAutoEnrollChange}
            value={this.state.AutoEnroll}
            id="signupInputDrop"
          >
            <option value="" disabled selected>
              Please Select Yes or No
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <hr />
          <label htmlFor="enrollmentPercentage">
            Auto Enrollment Percentage
          </label>
          <input
            type="text"
            id="dropDownInput"
            onChange={this.handlePercentageChange}
            value={this.state.enrollmentPercentage}
            name="enrollmentPercentage"
            placeholder="Insert percentage you want to match"
          />
          <hr />
          <div id="planModal">
            <div>
              <label htmlFor="planType">Plan Type</label>
              <select
                name="planType"
                onChange={this.handlePlanChange}
                value={this.state.planType}
                id="signupInputDrop"
              >
                <option value="" disabled selected>
                  Looking to start a..
                </option>
                <option>SingularK</option>
                <option>PetiteK</option>
                <option>UniversalK</option>
              </select>
            </div>
            <button
              id="modalButton"
              className="modal-open"
              onClick={this.openModal}
            >
              Which Plan is Right for Me?
            </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              contentLabel="planTypeModal"
              style={customStyles}
            >
              <div id="modal">
                <button onClick={this.closeModal} id="submitButton">
                  Close
                </button>
                <div>
                  <h1>SingularK</h1>
                  <h1>PetiteK</h1>
                  <h1>UniversalK</h1>
                </div>
              </div>
            </Modal>
          </div>
        </div>

        <hr />
        <div id="formSection2">
          <label htmlFor="payrollProvider">Payroll Provider</label>
          <select
            id="signupInputDrop"
            name="payrollProvider"
            onChange={this.handleProviderChange}
            value={this.state.payrollProvider}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="ADP">ADP</option>
            <option value="Intuit">Intuit</option>
            <option value="Gusto">Gusto</option>
            <option value="OnPay">OnPay</option>
            <option value="SurePayroll">SurePayroll</option>
            <option value="Other">Other</option>
          </select>
          <hr />
          <label htmlFor="paymentCycle">Payment Cycle</label>
          <select
            name="paymentCycle"
            onChange={this.handlePaymentCycleChange}
            value={this.state.paymentCycle}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
            <option value="Semi-Monthly">Semi-Monthly</option>
          </select>
        </div>
        <br />
        <hr />
      </div>
    );
  }
}
