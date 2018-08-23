import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Index.js";
import FooterMovable from "../Footer/footerMovable";

var baseURL = "https://saveawaytest.herokuapp.com/";

export default class EmployeeInfo extends React.Component {
  getCompanyInfo = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      signupName: data.get("signupName"),
      signupAdressStreet: data.get("signupAdressStreet"),
      signupAdressApt: data.get("signupAdressApt"),
      signupAdressCity: data.get("signupAdressCity"),
      signupAdressZip: data.get("signupAdressZip"),
      signupPhone: data.get("signupPhone"),
      adminName: data.get("adminName"),
      adminPhone: data.get("adminPhone"),
      companyEIN: data.get("companyEIN"),
      businessHours: data.get("businessHours")
    };
  };

  addCompanyInfo = event => {
    event.preventDefault();
    console.log(this.getCompanyInfo(event));
    fetch(baseURL + "companyEnrollment", {
      method: "post",
      body: JSON.stringify(this.getCompanyInfo(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    }).catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div id="aboutSections">
          <div id="aboutContent">
            <div id="companyInfo">
              <h1 id="companyInfo">Employee Information</h1>
              <hr />
              <h1 id="companyInfo">Talk with our team: 206-660-1045</h1>
            </div>
            <div id="enrollmentInfo">
              <tbody id="employeeInfoBox">
                <tr>
                  <th id="employeeInfoHeader">Employee Name</th>
                  <th id="employeeInfoHeader">Email</th>
                  <th id="employeeInfoHeader">Phone</th>
                  <th id="employeeInfoHeader">Do they have <br /> a 401k?</th>
                </tr>
                <tr>
                  <td>
                    <form id="employeeInfo">
                      <input
                        type="text"
                        placeholder="Employee 1"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Employee 2"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Employee 3"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Employee 4"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Employee 5"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Employee 6"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Employee 7"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Employee 8"
                        id="employeeInput"
                      />
                    </form>
                  </td>
                  <td>
                    <form id="employeeInfo">
                      <input
                        type="text"
                        placeholder="Email"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        id="employeeInput"
                      />
                    </form>
                  </td>
                  <td>
                    <form id="employeeInfo">
                      <input
                        type="text"
                        placeholder="Phone"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Phone"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Phone"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Phone"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Phone"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Phone"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Phone"
                        id="employeeInput"
                      />
                      <input
                        type="text"
                        placeholder="Phone"
                        id="employeeInput"
                      />
                    </form>
                  </td>
                  <td>
                  <form id="employeeInfo">
                    <input
                      type="text"
                      placeholder="Yes or No"
                      id="employeeInput"
                    />
                    <input
                      type="text"
                      placeholder="Yes or No"
                      id="employeeInput"
                    />
                    <input
                      type="text"
                      placeholder="Yes or No"
                      id="employeeInput"
                    />
                    <input
                      type="text"
                      placeholder="Yes or No"
                      id="employeeInput"
                    />
                    <input
                      type="text"
                      placeholder="Yes or No"
                      id="employeeInput"
                    />
                    <input
                      type="text"
                      placeholder="Yes or No"
                      id="employeeInput"
                    />
                    <input
                      type="text"
                      placeholder="Yes or No"
                      id="employeeInput"
                    />
                    <input
                      type="text"
                      placeholder="Yes or No"
                      id="employeeInput"
                    />
                  </form>
                  </td>
                </tr>
                <div>
                  <input
                    type="submit"
                    id="submitButton"
                    value="Submit Employees"
                  />
                </div>
              </tbody>
            </div>
          </div>
        </div>
        <FooterMovable />
      </div>
    );
  }
}
