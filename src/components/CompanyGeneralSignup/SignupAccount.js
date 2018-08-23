import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Toaster, Intent } from "@blueprintjs/core";
import { app } from "../Base";

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
  error: null
};

class SignupAccount extends Component {
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

  authWithEmailPassword = event => {
    event.preventDefault();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const passwordConfirmed = this.passwordConfirmedInput.value;

    app
      .auth()
      .fetchSignInMethodsForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          return app.auth().createUserWithEmailAndPassword(email, password);
        } else {
          return app.auth().signInWithEmailAndPassword(email, password);
        }
      })
      .then(alert("Account Created! Now submit your information"));
  };

  render() {
    const { email, password, passwordConfirmed, error } = this.state;

    const isInvalid =
      password !== passwordConfirmed || password === "" || email === "";

    return (
      <div style={loginStyles}>
        <Toaster
          ref={element => {
            this.toaster = element;
          }}
        />
        <p> note: you will not be able to create an account unless your passwords match </p>
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
          <input type="submit" value="Create Account" id="accountSignin" disabled={isInvalid} />
        </form>
      </div>
    );
  }
}

export default SignupAccount;
