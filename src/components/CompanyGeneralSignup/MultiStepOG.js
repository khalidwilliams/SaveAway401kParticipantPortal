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
    navState: getNavStates(0, 5)
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

  next = () => {
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
      { name: "Step One", component: <StepOne /> },
      {
        name: "Step Two",
        component: <StepTwo />
      },
      {
        name: "Step Three",
        component: <StepThree />
      },
      {
        name: "Step Four",
        component: <StepFour />
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
