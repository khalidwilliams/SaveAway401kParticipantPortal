import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FooterMovable from "../Footer/footerMovable";
import Roth from "./Roth";
import RetirementSavings from "./RetirementSavings";
import Secrets from "./401kSecrets";
import CompoundingInterest from "./CompoundingInterest";
import ContributionLimits from "./ContributionLimits";
import SavingTheSaveAway from "./SavingTheSaveAway";
import ScrollableAnchor from "react-scrollable-anchor";

export default class News extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutSections">
          <div id="navBarSide">
            <div id="blogDir">
              <h4 >Blog Directory </h4>
            </div>
            <nav>
              <a href="#Roth">
                <h2 className="navItemAbout1">Roth</h2>
              </a>
              <a href="#RetirementSavings">
                <h2 className="navItemAbout1">Retirement Savings</h2>
              </a>
              <a href="#Secrets">
                <h2 className="navItemAbout1">Secrets</h2>
              </a>
              <a href="#CompoundingInterest">
                <h2 className="navItemAbout1">Compounding Interest</h2>
              </a>
              <a href="#ContributionLimits">
                <h2 className="navItemAbout1">Contribution Limits</h2>
              </a>
              <a href="#SavingTheSaveAway">
                <h2 className="navItemAbout1">Saving The Save Away</h2>
              </a>
            </nav>
          </div>{" "}
          <div className="blogFeed">
            <ScrollableAnchor className={"Roth"}>
              <Roth />
            </ScrollableAnchor>
            <ScrollableAnchor className={"RetirementSavings"}>
              <RetirementSavings />
            </ScrollableAnchor>
            <ScrollableAnchor className={"Secrets"}>
              <Secrets />
            </ScrollableAnchor>
            <ScrollableAnchor className={"CompoundingInterest"}>
              <CompoundingInterest />
            </ScrollableAnchor>
            <ScrollableAnchor className={"ContributionLimits"}>
              <ContributionLimits />
            </ScrollableAnchor>
            <ScrollableAnchor className={"SavingTheSaveAway"}>
              <SavingTheSaveAway />
            </ScrollableAnchor>
          </div>
        </div>
        <FooterMovable />
      </div>
    );
  }
}
