"use strict";
import React, { Component } from "react";
import SimpleStorage from "../../stores/SimpleStorage";
import { Redirect } from "react-router-dom";
import { Toaster, Intent } from "@blueprintjs/core";
import { config } from "../../firebase/firebase";

const loginStyles = {
  width: "90%",
  maxWidth: "600px",
  margin: "20px auto",
  border: "3px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

const INITIAL_STATE = {
  email: "",
  password: "",
  passwordConfirmed: "",
  error: null,
  checked: false
};

export class StepFour extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  handlePasswordConfirmedChange = event => {
    this.setState({ passwordConfirmed: event.target.value });
  };

  handleCheckedChanged = event => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
    console.log(this.state);
  };

  authWithEmailPassword = event => {
    event.preventDefault();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const passwordConfirmed = this.passwordConfirmedInput.value;

    config
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          return config.auth().createUserWithEmailAndPassword(email, password);
        } else {
          return config.auth().signInWithEmailAndPassword(email, password);
        }
      })
      .then(alert("Account Created! Now click 'next' below to submit your information"));
  };

  render() {
    const { email, password, passwordConfirmed, error, checked } = this.state;

    const isInvalid =
      password !== passwordConfirmed ||
      password === "" ||
      email === "" ||
      checked === false;

    return (
      <div id="signup-form">
        <SimpleStorage parent={this} />
        <div id="accountDiv">
          <h3 id="formHeader"> Create your Account </h3>
        </div>
        <div style={loginStyles}>
          <Toaster
            ref={element => {
              this.toaster = element;
            }}
          />
          <p>
            note: you will not be able to create an account unless your
            passwords match
          </p>
          <form
            onSubmit={event => {
              this.authWithEmailPassword(event);
            }}
            ref={form => {
              this.loginForm = form;
            }}
          >
            <label>
              Email
              <input
                name="email"
                type="email"
                ref={input => {
                  this.emailInput = input;
                }}
                placeholder="Email"
                onChange={this.handleEmailChange}
              />
            </label>
            <br />
            <label>
              Password
              <input
                name="password"
                type="password"
                ref={input => {
                  this.passwordInput = input;
                }}
                placeholder="Password"
                onChange={this.handlePasswordChange}
              />
            </label>
            <br />
            <label>
              Confirm Password
              <input
                name="passwordConfirmed"
                type="password"
                ref={input => {
                  this.passwordConfirmedInput = input;
                }}
                placeholder="Password"
                onChange={this.handlePasswordConfirmedChange}
              />
            </label>
            <br />
            <hr />
            <div>
              <span>By clicking "Accept" I agree that:</span>
              <ul>
                <li>
                  I have read and accepted the <a href="#">User Agreement</a>
                </li>
                <li>
                  I have read and accepted the <a href="#">Privacy Policy</a>
                </li>
                <li>I am at least 18 years old</li>
              </ul>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={this.state.checked}
                  onChange={this.handleCheckedChanged}
                  autoFocus
                />
                <span> Accept </span>
              </label>
            </div>
            <input
              type="submit"
              value="Create Account"
              id="accountSignin"
              disabled={isInvalid}
            />
          </form>
        </div>
      </div>
    );
  }
}
