import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FooterMovable from "../Footer/footerMovable";
import lightBulb from "./Assets/lightBulb.jpg";

var sectionStyle = {
  backgroundImage: `url(${lightBulb})`,
  height: "850px",
  backgroundSize: "cover"
};

var baseURL = "https://saveawaytest.herokuapp.com/";

export default class Welcome extends React.Component {
  getBasicInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      signupName: data.get("signupName"),
      signupEmail: data.get("signupEmail"),
      signupPhone: data.get("signupPhone"),
      signupCoName: data.get("signupCoName"),
      EmployeeNumber: data.get("EmployeeNumber")
    };
  };

  sendMessage = event => {
    fetch("https://saveaway-email-server.herokuapp.com/welcomePage", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(resp => resp.json())
      .then(resp => {
        this.response = resp.message;
      });
  };

  addBasicInfo = event => {
    event.preventDefault();
    console.log(this.getBasicInfo(event));
    fetch(baseURL + "freeConsultation", {
      method: "post",
      body: JSON.stringify(this.getBasicInfo(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Acess-Control-Allow-Headers":
          "Origin, Content-Type, Authorization, X-Auth-Tocken",
        "Acess-Control-Allow-Headers": "GET, POST, HEAD, OPTIONS",
        "Content-Type": "application/json"
      })
    }).then(this.sendMessage(event));
  };

  render() {
    return (
      <div>
        <section style={sectionStyle}>
          <div id="infoSignup">
            <div id="introInfo">
              <h1 id="upperTagline">
                Retirement
                <br />
                Re-Imagined
              </h1>
              <h3 id="lowerTagline">
                Your employees deserve a 401k retirement benefits plan.
                <br />
                You deserve a plan that easy to setup and administer.
                <br />
                How about both? (starting at $10 dollars a month!).
              </h3>
            </div>
            <div id="signup">
              <h2>Signup for a free consultation </h2>
              <form id="signup-form" onSubmit={this.addBasicInfo}>
                <label htmlFor="signupName" id="welcomePageForm">
                  Your Name
                </label>
                <input type="text" name="signupName" />
                <label htmlFor="signupCoName" id="welcomePageForm">
                  Company Name
                </label>
                <input type="text" name="signupCoName" />
                <div>
                  <label htmlFor="signupPhone" id="welcomePageForm1">
                    Phone
                  </label>
                  <input type="text" name="signupPhone" id="inputWelcome" />
                  <label htmlFor="signupEmail" id="welcomePageForm1">
                    Email
                  </label>
                  <input type="text" name="signupEmail" id="inputWelcome" />
                </div>
                <label htmlFor="EmployeeNumber" id="welcomePageForm">
                  How many employees do you have?
                </label>
                <select name="EmployeeNumber" id="welcomePageDrop">
                  <option value="" disabled selected>
                    Looking to offer 401Ks to..
                  </option>
                  <option value="1-10">1-10 employees</option>
                  <option value="20-100">20-100 employees</option>
                  <option value="100-200">100-200 employees</option>
                </select>
                <input type="submit" id="submitButton" value="Submit" />
              </form>
            </div>
          </div>
        </section>
        <FooterMovable />
      </div>
    );
  }
}
