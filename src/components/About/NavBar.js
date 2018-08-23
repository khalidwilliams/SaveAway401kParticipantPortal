import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navBarSide">
      <nav>
        <Link to="/WhatWeDo">
          <h2 id="navItemAbout">What We Do</h2>
        </Link>
        <Link to="/FundChoices">
          <h2 id="navItemAbout">Fund Choices</h2>
        </Link>
        <Link to="/Pricing">
          <h2 id="navItemAbout">Pricing</h2>
        </Link>
      </nav>
    </div>
  );
}
