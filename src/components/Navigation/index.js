import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import logo from "./Assets/logo.png";
import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

const Navigation = ({ sessionStore }) => (
  <div>
    {sessionStore.authUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = () => (
  <header>
    <div>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </div>
    <div id="navBar">
      <nav>
        <Link to="/">
          <h2 id="navItem">Home</h2>
        </Link>
        <Link to="/About">
          <h2 id="navItem">About</h2>
        </Link>
        <Link to="/Enroll">
          <h2 id="navItem">Enroll Now</h2>
        </Link>
        <Link to="/401K-News">
          <h2 id="navItem">401K News</h2>
        </Link>
        <Link to="/Free-Guide">
          <h2 id="navItem">Free Guide</h2>
        </Link>
      </nav>
    </div>
    <div>
      <div id="signup">
        <SignOutButton />
      </div>
    </div>
  </header>
);

const NavigationNonAuth = () => (
  <header>
    <div>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </div>
    <div id="navBar">
      <nav>
        <Link to="/">
          <h2 id="navItem">Home</h2>
        </Link>
        <Link to="/About">
          <h2 id="navItem">About</h2>
        </Link>
        <Link to="/Enroll">
          <h2 id="navItem">Enroll Now</h2>
        </Link>
        <Link to="/401K-News">
          <h2 id="navItem">401K News</h2>
        </Link>
        <Link to="/Free-Guide">
          <h2 id="navItem">Free Guide</h2>
        </Link>
      </nav>
    </div>
    <div>
      <div id="signup">
        <Link to={routes.SIGN_UP}>
          <h2 id="navItem">Signup</h2>
        </Link>
      </div>
      <div id="signup">
        <Link to={routes.LOG_IN}>
          <h2 id="navItem"> Login </h2>
        </Link>
      </div>
    </div>
  </header>
);


export default compose(inject("sessionStore"), observer)(Navigation);
