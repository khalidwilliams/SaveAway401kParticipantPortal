import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

const loginStyles = {
  width: "90%",
  maxWidth: "500px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
};

const SignInPage = ({ history }) => (
  <div style={loginStyles}>
    <div>
      <h1 id="loginPage"> Login to Your Account Here </h1>
      <SignInForm history={history} />
      <PasswordForgetLink />
    </div>
    <div id="linkToSignup">
      <h2 id="linkToSignup"> No Account?</h2>
      <br />
      <br />
      <Link to={routes.SIGN_UP}>
        <h2>Signup for one here.</h2>
      </Link>
    </div>
  </div>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit} id="loginContainer">
        <div id="loginInput">
          <label id="accountInfoLabel">
            Email
            <input
              value={email}
              onChange={event =>
                this.setState(updateByPropertyName("email", event.target.value))
              }
              type="text"
              placeholder="Email Address"
              className="accountInfoInput"
            />
          </label>
        </div>
        <div id="loginInput">
          <label id="accountInfoLabel">
            Password
            <input
              value={password}
              onChange={event =>
                this.setState(
                  updateByPropertyName("password", event.target.value)
                )
              }
              type="password"
              placeholder="Password"
              className="accountInfoInput"
            />
          </label>
        </div>

        <button disabled={isInvalid} type="submit" id="accountSignin">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
