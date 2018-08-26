import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import yearstoretirement from "./Assets/yearstoretirement.png";

export default class SavingTheSaveAway extends React.Component {
  render() {
    return (
      <div>
        <div className="blogHeader">
          <h1 className="blogTitle">
            Saving the SaveAway way (Say that 3 times fast...)
          </h1>
          <h3 className="blogDate">March 8, 2018</h3>
        </div>
        <div className="blogContent">
          <div className="blogSection">
            <p className="blogPara">
              Believe it or not, America's educational system cranks out
              thousands of work-ready employees each year. Whether a person
              graduates from High School and heads straight to the workforce, or
              whether that person goes to a trade school or college---in any
              case, most employees are not armed with sufficient knowledge of
              capital markets.
            </p>
            <p className="blogPara">
              On someone's first day of work, they have no idea what they should
              be doing for their retirement, their just worried about getting
              their feet wet in their new job.
            </p>
            <p className="blogPara">
              40% of small businesses in America (defined as under 250
              employees), or roughly 30 million people, have no established
              retirement at their place of business. That means the only way
              they will be able to save for their retirement is through a
              Traditional or Roth IRA. Sadly, the contributions for most people
              in these accounts is only $5,500 dollars for 2018. People who
              don't have access to a 401k plan are not going to be able to save
              enough, over the life of their career, to be able to afford a
              fulfilling retirement. Most likely, they'll just have to work into
              their 70's and 80's---and possibly to their dying day.
            </p>
            <p className="blogPara">
              Their is a solution to this problem. If every business in America
              had a 401k plan, then employees would have access to a Traditional
              or Roth 401k plan, and be able to save up to $18,500 per year.
              ($24,500 per year if you are over 50 years of age!). Using this
              type of plan, even an average wage earner can save enough money to
              enjoy a long and enjoyable retirement.
            </p>
            <p className="blogPara">
              Below is a savings schedule of a janitor that worked for an
              elementary school. Each year, he budgeted enough money to put into
              his 401k to save $1,000,000 in just 21 years! This is a perfect
              example of taking a disciplined, consistent approach to
              investing---and letting the markets and compounding interest do
              the heavy lifting.
            </p>
            <p className="blogPara">
              Could you be budgeting money each year into a 401k plan? Do you
              plan on working for the next 20 years, and would you like to have
              a decent sized next egg to be able to enjoy your golden years? See
              below for one example of how a janitor was able to do just that!
            </p>
            <div className="pdfContainer">
              <img
                className="blogSingleImage"
                src={yearstoretirement}
                alt="yearstoretirement"
              />
            </div>
          </div>
        </div>
        <hr />
        <br />
        <hr />
      </div>
    );
  }
}
