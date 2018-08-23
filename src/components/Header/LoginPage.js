import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Index";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <h1 id="loginPage"> Login to Your Account Here </h1>
        </div>
        <div id="linkToSignup">
          <h2 id="linkToSignup"> No Account?</h2>
          <br />
          <br />
          <Link to="/Signup">
            <h2>Signup for one here.</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
