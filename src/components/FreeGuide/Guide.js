import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Index.js";
import FooterMovable from "../Footer/footerMovable";
import retirement from "./Assets/retirement.png";
import accountInfo from "./Assets/accountInfo.png";
import SAVEAWAY401K_RETIREMENTGUIDE from "./Assets/SAVEAWAY401K_RETIREMENTGUIDE.pdf";

export default function Guide() {
  return (
    <div id="guide">
      <div id="guideHeader">
        <h1> SAVEAWAY401K | RETIREMENT GUIDE</h1>
        <a
          href={SAVEAWAY401K_RETIREMENTGUIDE}
          download="SAVEAWAY401K_RETIREMENTGUIDE"
        >
          <h2 id="guideDownLoad">Download Guide Here</h2>
        </a>
      </div>
      <div id="retirement">
        <a
          href={SAVEAWAY401K_RETIREMENTGUIDE}
          download="SAVEAWAY401K_RETIREMENTGUIDE"
        >
          <img src={retirement}  id="retirementPhoto" alt="retirement" />
        </a>
      </div>
      <h3 className="guideInfo">
        RETIREMENT IS NOT COMPLICATED, BUT THERE ARE A FEW KEY THINGS YOU SHOULD
        KNOW...
      </h3>
      <h3 className="guideInfo">
        Time Horizon: Probably the most overlooked factor in investing is your
        time horizon. The longer you have to invest in your retirement, the
        longer you get to take advantage of Compounding Interest.
      </h3>
      <h3 className="guideInfo">
        Market Timing: Trying to time the ups and downs of the market is
        probably one of the worst things you can do in your retirement
        portfolio. Consider this quote from one of the greatest fund managers of
        all time, Peter Lynch:
      </h3>
      <h3 id="quote">
        “Since World War II, despite nine recessions and many other economic
        setbacks, corporate earnings are up 63 fold and the stock market is up
        71 fold. Corporate profits per share have grown over 9% annually despite
        the down years. Nine percent may not sound like a lot but consider that
        it means that profits mathematically double every eight years, quadruple
        every 16, are up 16 fold every 32 years and are up 64 fold every 48
        years. Even if earnings rates slow to 6-7%, the compound gains will
        still be impressive over 10-20 years.”
      </h3>
      <h3 className="guideInfo">
        As Lynch demonstrates with this quote, it’s better to get a diversified
        basket of equities, and hold them over the long term.
      </h3>
      <h3 className="guideInfo">
        Investment Options: Probably the most important considerations you can
        make when choosing investments is the expense of that investment.
        Historically speaking, Mutual Funds have been a very expensive way to
        invest. Research shows that 70% of actively-managed Mutual Funds do not
        outperform their comparable Exchange Traded Fund (ETF) over a 10 year
        time window. That means you are paying a fund manager to get as-good or
        worse returns on your investments.
      </h3>
      <h3 className="guideInfo">
        One of the benefits of investing in Exchange Traded Funds is that they
        come with a very low expense ratio. The reason for this is that ETFs are
        managed by a computer and just mirror indexes. Take the S&P 500 which
        has 500 of the largest US companies. Your typical Mutual Fund that
        attempts to mirror the S&P 500 has associated expenses of 100-200 basis
        points (1-2%). The SPY ETF, which also mirrors the S&P 500 has
        associated expenses of just 5 basis points (or .05%). That additional
        .95% or 1.95% can have a massive impact to your account balance over a
        20-30 year time horizon.
      </h3>
      <h3 className="guideInfo">
        Compounding Interest: The power of compounding interest works for people
        that have a long savings time horizon ahead of them.
        <br />
        <br />
        Let’s give a simple example:
      </h3>
      <h3 className="guideInfoStory">
        Three people started saving for their eventual retirement, let’s call
        them Jenny, Joseph, and Robert.
      </h3>
      <h3 className="guideInfoStory">
        Jenny understood the power of compounding interest, as her Dad was a
        Financial Advisor and extolled the values of it on her from an early
        age. Her first year out of college, she was just finding her feet and
        learning to balance her budget. Starting at age 25, she started
        investing $1,000 per month and did so every month until she was 35 (10
        years). At that point, she stopped investing in her retirement account
        and just let her account continue to grow. The account grew at 7% until
        she retired at age 65.
      </h3>
      <h3 className="guideInfoStory">
        Joseph married Jenny when they turned 30 years old. She told him about
        her plan to save for retirement, but he wasn’t totally bought in.
        Finally, after years of convincing, Joseph started putting $1,000 a
        month (just like Jenny) into his retirement account at age 35. Joseph
        and Jenny were competitive in their savings account, and he was
        determined to catch up to her balance. He invested $1,000 a month for 10
        years until he was 45 years old, taking on the same 10 year plan that
        she had.
      </h3>
      <h3 className="guideInfoStory">
        Their told their friend Bob about their plan right around the time
        Joseph was winding down his contributions to his retirement plan. Bob
        thought it was a good idea and he started investing $1,000 per month
        just like Jenny and Joseph. He did this every month from age 45 to 55,
        also occurring a 7% rate of return.
      </h3>
      <h3 className="guideInfoStory">
        Despite the fact that Jenny, Joseph, and Bob all invested $120,000
        toward their retirement, their account balances looked very different on
        their 65th Birthday.
      </h3>
      <h3 className="guideInfoStory">
        Based on a consistent rate of return (for our example we used 7%), and
        the compounding interest factor here is what their account balances
        looked like:
      </h3>
      <img src={accountInfo} id="guideImage" alt="accountInfo" />
      <h3 className="guideInfoStory">
        The moral of the story? Start investing as early as you possibly can,
        even if you don’t have $1,000 to put into your retirement account.
        Having your retirement savings take advantage of the miracle of
        compounding interest can work for anyone, but in order to take advantage
        of it you need to start early and make consistent contributions.
      </h3>
      <h3 className="guideInfoStory">
        Consistency: The best way to ensure that you are consistent is to Auto
        Enroll in your 401k. Auto Enrollment means that you elect a certain
        percentage to be taken out of your paycheck and invested into your 401k.
        It’s better to do that from the start, as you’ll never even miss the
        money your putting away for retirement.
      </h3>
      <h3 className="guideInfoStory">
        Learn more about these concepts and others by contacting a SaveAway401k
        Account Representative:{" "}
        <a href={"mailto:sales@saveaway401k.com"}> sales@saveaway401k.com </a>
      </h3>
      <FooterMovable />
    </div>
  );
}
