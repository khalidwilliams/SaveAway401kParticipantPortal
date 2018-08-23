import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import WhatWeDo from "./WhatWeDo.js";
import FundChoices from "./FundChoices.js";
import Footer from "../Footer/Index";

export default function AboutUs() {
  return (
    <div>
      <div id="aboutSections">
        <NavBar />
        <div>
          <WhatWeDo />
          <FundChoices />
        </div>
      </div>
      <Footer />
    </div>
  );
}
