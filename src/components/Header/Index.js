import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./Assets/logo.png";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
      <div id="navBar">
        <nav>
          <Link to="/">
            <h2 className="navItem">Home</h2>
          </Link>
          <Link to="/About">
            <h2 className="navItem">About</h2>
          </Link>
          <Link to="/Enroll">
            <h2 className="navItem">Enroll Now</h2>
          </Link>
          <Link to="/401K-News">
            <h2 className="navItem">401K News</h2>
          </Link>
          <Link to="/Free-Guide">
            <h2 className="navItem">Free Guide</h2>
          </Link>
        </nav>
      </div>
      <div>
        <div id="signup">
          <Link to="/CompanySignup">
            <h2 className="navItem">Signup</h2>
          </Link>
        </div>
        <div id="signup">
          <Link to="/Login">
            <h2 className="navItem"> Login </h2>
          </Link>
        </div>
      </div>
    </header>
  );
}
