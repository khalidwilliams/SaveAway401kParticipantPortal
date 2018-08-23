import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Index.js";
import FooterMovable from "../Footer/footerMovable";

export class CompanyEnrollment extends React.Component {
  render() {
    return (
        <div id="aboutSections">
          <div id="aboutContent">
            <div>
              <h2>
                Welcome to your new SaveAway401k Plan. Did you know that 401k is
                the 3rd most asked for benefit at companies, but 40% of small
                businesses don’t currently offer a 401k plan? You have taken the
                first step at creating an amazing opportunity for your
                employees, and you should be commended!
              </h2>
              <h2>
                Setting up a plan is easy, and doesn’t take long.
              </h2>
              <h2>
                Once your plan is setup, and we’ve added in the participants,
                they’ll receive notifications to setup their plans.
              </h2>
              <hr />
              <hr />
            </div>
          </div>
      </div>
    );
  }
}
