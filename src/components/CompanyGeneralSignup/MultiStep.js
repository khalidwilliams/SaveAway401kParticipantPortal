import React from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { StepFive } from "./StepFive";

const getNavStates = (indx, length) => {
  let styles = [];
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push("done");
    } else if (i === indx) {
      styles.push("doing");
    } else {
      styles.push("todo");
    }
  }
  return { current: indx, styles: styles };
};

const checkNavState = (currentStep, stepsLength) => {
  if (currentStep > 0 && currentStep < stepsLength - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    };
  } else if (currentStep === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false
    };
  }
};

export default class MultiStep extends React.Component {
  state = {
    showPreviousBtn: false,
    showNextBtn: true,
    compState: 0,
    navState: getNavStates(0, 5),
    FullName: "",
    CompanyEmail: "",
    State: "",
    CompanyName: "",
    CompanyPhone: "",
    EmployeeNumber: "",
    payroll: "",
    provider: "",
    heardAbout: "",
    Admin: "",
    PlanStatus: "",
    AdminName: "",
    AdminPhone: "",
    AdminEmail: "",
    checked: null
  };

  setNavState = next => {
    this.setState({
      navState: getNavStates(next, 5)
    });
    if (next < 5) {
      this.setState({ compState: next });
    }
    this.setState(checkNavState(next, 5));
  };

  handleKeyDown = evt => {
    if (evt.which === 13) {
      this.next();
    }
  };

  handleOnClick = evt => {
    if (evt.currentTarget.value === 5 - 1 && this.state.compState === 5 - 1) {
      this.setNavState(5);
    } else {
      this.setNavState(evt.currentTarget.value);
    }
  };

  getEnteredInfo = event => {
    event.preventDefault();
    return {
      FullName: this.state.FullName,
      CompanyEmail: this.state.CompanyEmail,
      State: this.state.State,
      CompanyName: this.state.CompanyName,
      CompanyPhone: this.state.CompanyPhone,
      EmployeeNumber: this.state.EmployeeNumber,
      payroll: this.state.payroll,
      provider: this.state.provider,
      heardAbout: this.state.heardAbout,
      Admin: this.state.Admin,
      PlanStatus: this.state.PlanStatus,
      AdminName: this.state.AdminName,
      AdminPhone: this.state.AdminPhone,
      AdminEmail: this.state.AdminEmail,
      checked: this.state.checked
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/basicInfo1", {
      method: "post",
      body: JSON.stringify(this.getEnteredInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
    console.log(this.state);
  };

  handleStepOne = data => {
    this.setState({
      FullName: data.FullName,
      CompanyEmail: data.CompanyEmail,
      State: data.State,
      CompanyName: data.CompanyName,
      CompanyPhone: data.CompanyPhone,
      EmployeeNumber: data.EmployeeNumber
    });
    console.log("handle1", this.state);
  };

  handleStepTwo = data => {
    this.setState({
      payroll: data.payroll,
      provider: data.provider,
      heardAbout: data.heardAbout
    });
    console.log("handle2", this.state);
  };

  handleStepThree = data => {
    this.setState({
      Admin: data.Admin,
      PlanStatus: data.PlanStatus,
      AdminName: data.AdminName,
      AdminPhone: data.AdminPhone,
      AdminEmail: data.AdminEmail
    });
    console.log("handle3", this.state);
  };

  handleStepFour = data => {
    this.setState({
      checked: data.checked
    });
    console.log("handle4", this.state);
  };

  next = event => {
    this.sendMessage(event);
    this.setNavState(this.state.compState + 1);
  };

  previous = () => {
    if (this.state.compState > 0) {
      this.setNavState(this.state.compState - 1);
    }
  };

  getClassName = (className, i) => {
    return className + "-" + this.state.navState.styles[i];
  };

  renderSteps = ({ steps }) => {
    return steps.map((s, i) => (
      <li
        className={this.getClassName("progtrckr", i)}
        onClick={this.handleOnClick}
        key={i}
        value={i}
      >
        <em>{i + 1}</em>
        <span>{steps[i].name}</span>
      </li>
    ));
  };

  render() {
    const steps = [
      { name: "Step One", component: <StepOne sendData={this.handleStepOne}/> },
      {
        name: "Step Two",
        component: <StepTwo sendData={this.handleStepTwo}/>
      },
      {
        name: "Step Three",
        component: <StepThree sendData={this.handleStepThree}/>
      },
      {
        name: "Step Four",
        component: <StepFour sendData={this.handleStepFour}/>
      },
      {
        name: "Confirm!",
        component: <StepFive />
      }
    ];
    return (
      <div onKeyDown={this.handleKeyDown}>
        <ol className="progtrckr">{this.renderSteps({ steps })}</ol>
        {steps[this.state.compState].component}
        <div style={this.props.showNavigation ? {} : { display: "none" }}>
          <button
            className="previousButton"
            style={this.state.showPreviousBtn ? {} : { display: "none" }}
            onClick={this.previous}
          >
            Previous
          </button>

          <button
            className="nextButton"
            style={this.state.showNextBtn ? {} : { display: "none" }}
            onClick={this.next}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

MultiStep.defaultProps = {
  showNavigation: true
};
