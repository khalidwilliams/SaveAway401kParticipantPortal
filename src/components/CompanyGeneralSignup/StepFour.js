import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { auth, db } from "../../firebase";
import * as routes from "../../constants/routes";
import SimpleStorage from "../../stores/SimpleStorage";
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

const SignUpPage = ({ history }) => (
  <div id="signup-form">
    <SimpleStorage parent={this} />
    <h1 id="loginPage">Sign Up for an Account</h1>
    <p>
      note: you will not be able to create an account unless your passwords
      match
    </p>
    <StepFour history={history} />
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class StepFour extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db
          .doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      username === "" ||
      email === "";

    return (
      <div style={loginStyles}>
      <div id="accountDiv">
        <h3 id="formHeader"> Create your Account </h3>
      </div>
      <p>
        note: you will not be able to create an account unless your
        passwords match
      </p>
        <form onSubmit={this.onSubmit}>
          <div id="loginInput">
            <label>
              Username
              <input
                value={username}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("username", event.target.value)
                  )
                }
                type="text"
                placeholder="Username"
              />
            </label>
            <label>
              Email
              <input
                value={email}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("email", event.target.value)
                  )
                }
                type="text"
                placeholder="Email Address"
              />
            </label>
          </div>
          <br />
          <div id="loginInput">
            <label>
              Password
              <input
                value={passwordOne}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("passwordOne", event.target.value)
                  )
                }
                type="password"
                placeholder="Password"
              />
              <input
                value={passwordTwo}
                onChange={event =>
                  this.setState(
                    updateByPropertyName("passwordTwo", event.target.value)
                  )
                }
                type="password"
                placeholder="Confirm Password"
              />
            </label>
          </div>
          <button disabled={isInvalid} type="submit" id="accountSignin">
            Create Account
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Dont have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { StepFour, SignUpLink };
