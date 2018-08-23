import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App/NavBar.css";
import MultiStep from "./MultiStep";

export default class CompanyEnrollmentInfo extends React.Component {
  render() {
    return (
      <div>
        <div id="aboutContent">
          <div id="enrollmentInfo">
            <div id="companySignupDiv">
              <MultiStep />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
