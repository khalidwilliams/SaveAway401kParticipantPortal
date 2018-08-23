import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import FooterMovable from "../Footer/footerMovable";

var baseURL = "https://saveawaytest.herokuapp.com/";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/About"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

export default class FreeGuide extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  getBasicInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      signupName: data.get("signupName"),
      signupEmail: data.get("signupEmail"),
      signupPhone: data.get("signupPhone"),
      signupCoName: data.get("signupCoName"),
      EmployeeNumber: data.get("EmployeeNumber")
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/freeGuide", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
  };

  addBasicInfo = event => {
    event.preventDefault();
    console.log(this.getBasicInfo(event));
    fetch(baseURL + "guideRegistration", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(this.sendMessage(event))
      .then(this.login())
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/Guide" }
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <div id="infoSignup">
          <div id="signup">
            <h2>Signup and We Will Send you a Free Guide! </h2>
            <form id="signup-form" onSubmit={this.addBasicInfo}>
              <label htmlFor="signupName">Your Full Name</label>
              <input type="text" name="signupName" />
              <label htmlFor="signupEmail">Your Company Email Adress</label>
              <input type="text" name="signupEmail" />
              <label htmlFor="signupPhone">Your Company Phone Number</label>
              <input type="text" name="signupPhone" />
              <label htmlFor="signupCoName">Your Company Name</label>
              <input type="text" name="signupCoName" />
              <label htmlFor="EmployeeNumber">
                How many employees do you have?
              </label>
              <select name="EmployeeNumber">
                <option value="" disabled selected>
                  Looking to offer 401Ks to..
                </option>
                <option value="1-10">1-10 employees</option>
                <option value="20-100">20-100 employees</option>
                <option value="100-200">100-200 employees</option>
              </select>
              <input type="submit" id="submitButton" value="Submit" />
            </form>
          </div>
        </div>
        <FooterMovable />
      </div>
    );
  }
}
