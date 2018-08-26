import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import retirement from "./Assets/retirement.png";

export default class RetirementSavings extends React.Component {
  render() {
    return (
      <div>
        <div className="blogHeader">
          <h1 className="blogTitle">RetirementSavings</h1>
          <h3 className="blogDate">May 22, 2018</h3>
        </div>
        <div className="blogContent">
          <div className="blogSection">
            <p className="blogPara">
              Many people are surprised to find out that a vast majority of
              Americans are under-prepared for retirement. But don't take these
              facts as a reason to be comfortable, use them as a catalyst to
              take action and get ahead of the game. If your company offers a
              401k plan, and you aren't participating--reach out to someone at
              your company today to get enrolled. Sometimes the hardest thing to
              do is just get started----but you don't want to end up being a
              statistic! (see below)
            </p>
            <div className="pdfContainer">
            <img className="pdfImage" src={retirement} alt="retirement" />
            </div>
            <p className="blogPara">
              Based on the data above, you can see that Retirement Savings has a
              long way to go. Please feel free to reach out to us if we can help
              you understand more about Retirement Plans or how to get a plan at
              your business!
            </p>
          </div>
        </div>
        <hr />
        <br />
        <hr />
      </div>
    );
  }
}
