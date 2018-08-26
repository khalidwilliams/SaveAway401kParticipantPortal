import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import FooterMovable from "../Footer/footerMovable";
import priceTop from "./Assets/priceTop.png";
import pricing1 from "./Assets/pricing1.png";
import pricing2 from "./Assets/pricing2.png";
import pricing3 from "./Assets/pricing3.png";

export default function FundChoices() {
  return (
    <div>
      <div className="aboutSections">
        <NavBar />
        <div className="aboutContent">
          <div id="pricingContent">
            <h1 id="titlePrice"> We Keep it Simple...</h1>

            <div id="pricingSection">
              <Link to="/CompanySignup">
                <h2 id="planName"> SingularK</h2>
                <div id="planDeets">
                  <h4 id="planInfo">Setup: $100 |</h4>
                  <h4 id="planInfo">| Monthly: $10 </h4>
                </div>
              </Link>
            </div>

            <div id="pricingSection2">
              <Link to="/CompanySignup">
                <h2 id="planName2">PetiteK</h2>
                <div id="planDeets2">
                  <h4 id="planInfo2">Setup: $250 |</h4>
                  <h4 id="planInfo2">| Monthly: $50 </h4>
                </div>
              </Link>
            </div>

            <div id="pricingSection3">
              <Link to="/CompanySignup">
                <h2 id="planName3">UniversalK</h2>
                <div id="planDeets3">
                  <h4 id="planInfo3">Setup: $500 |</h4>
                  <h4 id="planInfo3">| Monthly: $75 </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterMovable />
    </div>
  );
}
