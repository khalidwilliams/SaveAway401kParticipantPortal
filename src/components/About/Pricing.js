import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import FooterMovable from "../Footer/footerMovable";
import SaveAway401kPetiteK from "./Assets/SaveAway401kPetiteK.pdf";
import SaveAway401kSingularK from "./Assets/SaveAway401kSingularK.pdf";
import SaveAway401kUniversalK from "./Assets/SaveAway401kUniversalK.pdf";

export default function FundChoices() {
  return (
    <div>
      <div className="aboutSections">
        <NavBar />
        <div className="aboutContent">
          <div id="pricingContent">
            <h1 id="titlePrice"> We Keep it Simple...</h1>
            <a href={SaveAway401kSingularK} target="_blank">
              <div id="pricingSection">
                <h2 id="planName"> SingularK</h2>
                <div id="planDeets">
                  <h4 id="planInfo">Setup: $100 </h4>
                  <h4 id="planInfo"> Monthly: $10 </h4>
                </div>
                <div className="enrollSection">
                  <a href={SaveAway401kSingularK} target="_blank">
                    <h4 className="moreButton">Find out more</h4>
                  </a>
                  <Link to="/Enroll">
                    <h4 className="enrollButton">Enroll Now!</h4>
                  </Link>
                </div>
              </div>
            </a>

            <a href={SaveAway401kPetiteK} target="_blank">
              <div id="pricingSection2">
                <h2 id="planName2">PetiteK</h2>
                <div id="planDeets2">
                  <h4 id="planInfo2">Setup: $250 </h4>
                  <h4 id="planInfo2"> Monthly: $50 </h4>
                </div>
                <div className="enrollSection">
                  <a href={SaveAway401kPetiteK} target="_blank">
                    <h4 className="moreButton">Find out more</h4>
                  </a>
                  <Link to="/Enroll">
                    <h4 className="enrollButton">Enroll Now!</h4>
                  </Link>
                </div>
              </div>
            </a>

            <a href={SaveAway401kUniversalK} target="_blank">
              <div id="pricingSection3">
                <h2 id="planName3">UniversalK</h2>
                <div id="planDeets3">
                  <h4 id="planInfo3">Setup: $500 </h4>
                  <h4 id="planInfo3"> Monthly: $75 </h4>
                </div>
                <div className="enrollSection">
                  <a href={SaveAway401kUniversalK} target="_blank">
                    <h4 className="moreButton">Find out more</h4>
                  </a>
                  <Link to="/Enroll">
                    <h4 className="enrollButton">Enroll Now!</h4>
                  </Link>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <FooterMovable />
    </div>
  );
}
