import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FooterMovable from "../Footer/footerMovable";
import Roth from "./Roth";
import RetirementSavings from "./RetirementSavings";
import Secrets from "./401kSecrets";
import CompoundingInterest from "./CompoundingInterest";
import ContributionLimits from "./ContributionLimits";
import SavingTheSaveAway from "./SavingTheSaveAway";

export default class News extends React.Component {
  render() {
    return (
      <div>
        <div id="blogFeed">
          <Roth />
          <RetirementSavings />
          <Secrets />
          <CompoundingInterest />
          <ContributionLimits />
          <SavingTheSaveAway />
        </div>
        <FooterMovable />
      </div>
    );
  }
}
