import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FooterMovable from "../Footer/footerMovable";
import NavBar from "./NavBar";

export default function WhatWeDo() {
  return (
    <div>
      <div className="aboutSections">
        <NavBar />
        <div className="aboutContent">
          <h1>
            SaveAway401k passionately believes every American deserves to live a
            happy and productive retirement.
          </h1>
          <div id="aboutInfo">
            <h2> Our Mission </h2>
            <h3>
              In the past, 401k plans have been geared to the needs of larger
              business. They have been complicated to setup, timely to administer,
              and have huge hidden fees that erode retirement savings over time.{" "}
            </h3>
            <h2>It does not have to be that way.</h2>
            <hr />
            <h3>
              SaveAway401k offers affordable plans for small businesses, making
              it simple for both the employer and employee to setup and
              administer their plan. We offer extremely low-cost ETF fund
              choices that allow participants to keep fees they would normally be
              paying to fund managers.
            </h3>
            <h2>Contact us to see how we can help.</h2>
            <hr />
            <h2> WHAT WE HAVE ACHIEVED</h2>
            <div id="accomplishList">
              <ul>
                <li>
                  We have scoured the market to find the lowest-cost options for
                  retirement savings.
                </li>
                <li>
                  We have created entertaining and interactive content to help
                  our customers learn investing basics.
                </li>
                <li>
                  Saving customers thousands of dollars in fees they pay with
                  competing plans.
                </li>
                <li> Made investing simple and engaging.</li>
              </ul>
              <ul>
                <li> Simplified the Setup Process for companies. </li>
                <li> Made ongoing administration a snap.</li>
                <li> Testing and Recordkeeping process automated.</li>
                <li> Continuous employee engagement via automated emails.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterMovable />
    </div>
  );
}
