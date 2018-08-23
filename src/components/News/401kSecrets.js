import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import understandingFees from "./Assets/understandingFees.png";
import fsctx from "./Assets/fsctx.png";

export default class Secrets extends React.Component {
  render() {
    return (
      <div>
        <div id="blogHeader">
          <h1 id="blogTitle"> Your 401k Plan's 3 dirtiest secrets....</h1>
          <h3 id="blogDate">April 30, 2018</h3>
        </div>
        <div id="blogContent">
          <div id="blogSection">
          <div id="pdfContainer">
            <img
              id="blogSingleImage"
              src={understandingFees}
              alt="understandingFees"
            />
            </div>
            <h4 id="sectionTitle">
              Maybe your company has a 401k plan setup---and if they do, I hope
              you are participating. I’ve written before about the importance of
              Compounding Interest in your 401k plan, but I want to bring up
              another equally important topic. Fees.
            </h4>
            <p id="blogPara">
              Imagine your retirement is a sink, and there are two variables
              that effect the water level in your sink. The water pouring in
              through the faucet (i.e. your contributions) and the water
              channeling out down the drain (think of that as withdrawals, or
              fees). Maximizing the first variable and minimizing the second
              variable is how you get a full sink.
            </p>
            <p id="blogPara">
              If understanding Compounding Interest helps people get motivated
              to start saving for retirement, fees are a close second in
              importance. Fees will have a direct impact on the amount of
              savings you have when it’s time to start using retirement plan
              funds. Many times, they are hidden in the fine print of that 30
              page document your employer handed you when you signed up (the one
              that you probably shredded because it was taking up a ton of room
              on your kitchen counter at home).
            </p>
            <p id="blogPara">
              {" "}
              You can always request information about the funds that you are
              investing in, and if you are unaware of the fees that you are
              paying, I’d recommend you do so. Here are the 3 biggest fees
              (there are others we'll talk about later) that you should be on
              the lookout for in your plan.
            </p>
            <p id="blogParaIndented">
              The Expense Ratio: This is the percentage amount you pay,
              annually, to have the fund managed for you. Here is a quick simple
              example. Let’s say you invest in the Fidelity Select
              Telecommunications Mutual Fund (FSTCX). This fund has an ‘Expense
              Ratio’ of .78%. That means, each year, you will pay Fidelity about
              three quarters of one percent to manage the fund. This is
              necessary to manage the fund to pay for administrative and
              overhead costs at Fidelity, marketing and sales related expenses,
              as well as to trade in and out of various positions as the fund
              manager sees fit.
            </p>
            <p id="blogPara">
              Looking at an ETF Expense Ratio, you’ll notice that it is much
              lower. An ETF (or Exchange Traded Fund) is managed by a computer
              and has lower trading volatility (meaning that it mirrors a
              certain ‘basket’ of stocks and sticks with those picks for a long
              period of time.) The Vanguard Telecommunication Services ETF (VOX)
              has an expense ration of just .12%.
            </p>
            <p id="blogPara">
              So, what does it all mean. Assuming* that these funds performed
              exactly the same over time, you’d be paying roughly .65% of your
              contributions towards an actively managed fund (FSTCX), versus
              saving yourself the expense ratio with the passively managed ETF
              (VOX).
            </p>
            <p id="blogPara">
              Sounds like a tiny amount of money (.65%) but it can really stack
              up over the years that you are saving.
            </p>
            <p id="blogParaItallic">
              Advice: Pay attention to what expense ratio you are paying on your
              funds. Call your 401k provider and have them go over the
              information with you on the phone. You might be surprised to find
              that you have funds with expense ratios over 1.00% or even 2.00%.
              These types of funds have the potential to eat into your
              retirement over time. Avoid these types of funds if similar ETF
              funds are available in your plan. It is a well-known fact in the
              industry that an ETF, despite it’s lower expense, actually
              OUTPERFORMS a managed fund (like a mutual fund) 70% of the time in
              a 7-10 year time window. I’ve included an image below which has a
              5 year comparison of the two funds from my example above. As you
              can see, the ETF is actually outperforming the managed fund,
              although they have mirrored each other pretty close for most of
              the time. This may or may not be the case with other Mutual Funds
              or ETFs, so do your research first.
            </p>
          </div>

          <div id="blogSection">
            <img id="blogImage" src={fsctx} alt="fsctx" />
            <p id="blogParaIndented">
              Wrap Fee: A wrap fee is a comprehensive charge enacted by a
              investment advisor or manager which may include additional fees on
              top of an expense ratio that might include additional brokerage
              services or access to investment advisors.
            </p>
            <p id="blogPara">
              I worked for a brokerage years ago that placed a wrap fee to
              investment products. This in itself is not particularly sneaky,
              any brokerage service is going to incur fees managing your
              account, providing year-end testing services for your 401k, and
              placing trades on behalf of it’s customers. Understandably, all of
              these services cost money, but you should really pay attention to
              any type of wrap fee that you would pay in conjunction with your
              investments and understand the size of the wrap. Some wrap funds
              seem to cover the costs, others seem to be much larger.
            </p>
            <p id="blogParaItallic">
              Advice: Call your 401k provider and ask them if they have a wrap
              fee associated with your 401k account, and if so---what is the
              wrap fee. Once again, every little bit that you can save in a 401k
              account matters, and you have the right to know what type of fees
              you are paying in your retirement account.
            </p>
            <p id="blogParaIndented">
              Front-End/Back-End Load Charge: This is a sales charge that is
              applied on the upfront/or back end transaction that you make in
              your account. Here is an example of both:
            </p>
            <p id="blogPara">
              Front-End: You setup your 401k and then invest $1,000 for an
              initial contribution. The fund has a 5% load charge on investments
              you make. When you submit your funds to your 401k for investment,
              a load charge of $50 (5% of $1,000) dollars is subtracted from the
              amount you invest, and your actual investment ends up being $950.
            </p>
            <p id="blogPara">
              Back-End: You decide to accept a position at another company and
              roll out your 401k to another financial services firm (an IRA
              rollover). You decided that you didn't like the funds that your
              401k provider had anyhow ---but you also find out these
              specialized funds are not available to where you are rolling your
              IRA. You are forced to sell the funds, and a check is sent to the
              company where you have your rollover IRA. You had $20,000 in your
              401k plan, an the back-end load charge was 5%. They subtract
              $1,000 for their charge and send the balance over to where you had
              your account transferred.
            </p>
            <p id="blogParaItallic">
              Advice: Your 401k provider should be able to tell you whether or
              not the funds you are invested in have Front or Back-End Load
              Charges. If they do, find out how long you need to be in the funds
              to not pay the load charges. Some funds will sunset the load
              charges after a certain amount of time (1-5 years). You’d hate to
              lose 5% of your 401k in you are close to being out of the load
              time window.
            </p>
            <p id="blogPara">
              In Conclusion: There are a lot of different ways to get stung in
              your 401k, and they can have massive ramifications years down the
              road on your account balance. Stay informed of the choices you
              have in your plan. If you take one hour to review, and you end up
              saving yourself a few thousand dollars over the life of your
              retirement, it would have been time well spent!
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
