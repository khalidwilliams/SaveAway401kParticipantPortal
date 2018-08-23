import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ContributionLimits extends React.Component {
  render() {
    return (
      <div>
        <div id="blogHeader">
          <h1 id="blogTitle">401k Contribution Limits</h1>
          <h3 id="blogDate">March 20, 2018</h3>
        </div>
        <div id="blogContent">
          <div id="blogSection">
            <h4 id="sectionTitle"> DID YOU KNOW?</h4>
            <p id="blogPara">
              In October of 2017, The IRS announced that contribution limits for
              2018 were going up again. In 2018, a 401k participant will be able
              to save $18,500 in their retirement fund, tax free.
            </p>
            <p id="blogPara">
              How you want to save those contributions is entirely up to you, as
              many company plans allow for the contributions to be saved in one
              of two ways.
            </p>
            <p id="blogPara">
              Traditional 401k Plan: A traditional 401k plan allows a
              participant to deduct the contribution from their paycheck before
              they are ever taxed. Here's a quick and simple example of how that
              works.
            </p>
            <p id="blogPara">
              Let's say your salary is $60,000 per year. Roughly speaking, that
              breaks down to $2,500 per paycheck. Like any normal payroll
              employee, there are going to be deductions for Medicare, Social
              Security, etc. These deductions are taken out of your paycheck and
              are not taxed. After these deductions are taken out, the balance
              is your take home pay.
            </p>
            <p id="blogPara">
              A Traditional 401k plan will also allow you to take a Tax Free
              deduction from your pay and put it into your retirement plan.
              Thus, you are not taxed on any contributions (up to $18,500 in
              2018) you make into your retirement plan. Thus, minus any
              contributions you make to Social Security, Medicare, AND your
              401k, that will be how your taxable wages are calculated on an
              annual basis.
            </p>
            <p id="blogPara"> A Roth 401k works slightly different. </p>
            <p id="blogPara">
              With a Roth 401k plan, it works the same way as above. Your
              taxable wages are calculated the same way (first deductions are
              made for Social Security, Medicare, etc.) but your take home
              taxable wage is calculated BEFORE your Roth 401k contribution.
              This means you effectively are taxed FIRST before you make your
              401k contribution.
            </p>
            <p id="blogPara"> Why the difference?</p>
            <p id="blogPara">
              With a Traditional 401k, you agree to forego taxes today---banking
              the money into your 401k ---only paying the taxes when you
              withdraw the funds later (current limits for withdrawal allow
              participants to take penalty free* money at age 59 1/2). At that
              point, you pay taxes on the money you withdraw at your current tax
              rate (which is hopefully lower than when you contributed the
              monehy)
            </p>
            <p id="blogPara">
              With a Roth 401k, you pay the taxes today at your current tax
              rate---but bank away the money you set aside. That money will
              continue to grow in the years to come, based on the investment
              choices you select and how they perform. When you go to withdraw
              the funds (once again, penalty free withdrawals can start taking
              place at age 59 1/2), you will have already satisfied your tax
              obligation when you deposited the money, and you can withdraw the
              funds with no tax liability.
            </p>
            <p id="blogPara">
              So the decision resides with you, take the tax now and be done
              with it----or delay your tax until you are 59 1/2 years old. In
              theory, your tax rate should be lower at 59 1/2, if you have
              retired and have limited income, but individual situations ---and
              future possible tax rate increases on 401k---can change!
            </p>
            <p id="blogPara">
              Our best advice is to talk with a financial specialist about your
              situation before deciding which type of plan might be right for
              you!
            </p>
            <p id="blogPara">
              *penalty free money - if you take an unqualified distribution from
              a retirement plan before age 59/12 you may be subject to a 10%
              early withdrawal penalty.
            </p>
            <p id="blogPara">
              <a
                href="https://www.betterment.com/resources/retirement/401ks-and-iras/traditional-or-roth-401k-decide-with-this-401k-calculator/"
                target="_blank"
              >
                Further reading from Betterment
              </a>
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
