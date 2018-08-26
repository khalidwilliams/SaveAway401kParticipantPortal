import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App/NavBar.css";
import MultiStep from "./MultiStep";

export default class CompanyGeneralInfo extends React.Component {
  render() {
    return (
      <div className="signUpEnroll">
        <div className="multiFormDiv">
          <MultiStep />
        </div>
      </div>
    );
  }
}
