import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Toaster, Intent } from "@blueprintjs/core";
import { app, auth, config } from "../../firebase/firebase";

const loginStyles = {
  width: "90%",
  maxWidth: "500px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  redirect: false
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
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

  authWithEmailPassword = event => {
    event.preventDefault();

    const email = this.emailInput.value;
    const password = this.passwordInput.value;

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
      .then(alert("login sucessful"))
      .then(this.loginForm.reset(), this.setState({ redirect: true }));
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <div style={loginStyles}>
        <Toaster
          ref={element => {
            this.toaster = element;
          }}
        />
        <form
          onSubmit={event => {
            this.authWithEmailPassword(event);
          }}
          ref={form => {
            this.loginForm = form;
          }}
          id="loginContainer"
        >
          <div id="loginInput">
            <label id="accountInfoLabel">
              Email
              <input
                name="email"
                type="email"
                ref={input => {
                  this.emailInput = input;
                }}
                placeholder="Email"
                id="accountInfoInput"
                onChange={this.handleEmailChange}
              />
            </label>
          </div>
          <div id="loginInput">
            <label id="accountInfoLabel">
              Password
              <input
                name="password"
                type="password"
                ref={input => {
                  this.passwordInput = input;
                }}
                placeholder="Password"
                id="accountInfoInput"
                onChange={this.handlePasswordChange}
              />
            </label>
          </div>

          <br />
          <input
            type="submit"
            value="Login Now"
            id="accountSignin"
            disabled={isInvalid}
          />
        </form>
        <div>
          <Link to="/pw-forget">
            <h4>Forgot Password? </h4>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
