import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CompoundingInterestPic from "./Assets/CompoundingInterestPic.png";
import totalsavings from "./Assets/totalsavings.png";
import simple from "./Assets/simple.png";

export default class CompoundingInterest extends React.Component {
  render() {
    return (
      <div>
        <div className="blogHeader">
          <h1 className="blogTitle">Your 401k's best friend? Compounding Interest</h1>
          <h3 className="blogDate">April 12, 2018</h3>
        </div>
        <div className="blogContent">
          <div className="blogSection">
            <div className="pdfContainer">
              <img
                className="blogSingleImage"
                src={CompoundingInterestPic}
                alt="CompoundingInterestPic"
              />
            </div>
            <h4 className="sectionTitle">
              You probably heard your mother or father ask you when you got your
              first REAL job: "What kind of benefits do they offer? Medical?
              Dental? 401k? Paid time off?" These were some of the first
              questions I got barraged with upon delivering the news that I had
              landed my first 9 to 5 corporate job at the age of 23.
            </h4>
            <p className="blogPara">
              "Ooooh", my father exclaimed "You're going to want to max out that
              401k, get full company match. You'll thank yourself later". I
              sighed. I was 23, and probably at the stage of most 23 year-olds
              who have had just about enough advice from their parents. But, I
              begrudgingly took his advice and took a couple hundred dollars out
              of my meager paycheck, and shelved it aside for "my retirement"
              (which was the farthest thing from my mind at the time).
            </p>
            <p className="blogPara">
              There was some timeless, sage wisdom in my father's advice that I
              absorbed. (other pieces I avoided such as "Don't get a dog if you
              are going to live in the city" and "Keep a full tank of gas in the
              winter always, you might get stranded somewhere") I was interested
              in the stock market, and figured it would be fun to make
              investments every paycheck.
            </p>
            <p className="blogPara">
              Compounding interest is what makes 401k plans so powerful, and
              getting started early is the best way to maximize compounding
              interest. Take this quote from Warren Buffett:
            </p>
            <p className="quote">
              "My wealth has come from a combination of living in America, some
              lucky genes, and compound interest".
            </p>
            <p className="blogPara">
              "Okay, Okay.", you say. "You've got my attention, what is
              Compounding Interest".
            </p>
            <p className="blogPara">
              Compounding interest is simply money you've set aside, that is
              growing at a certain percentage per year. Here's a simple example
              of compounding interest at work.....
            </p>
          </div>
          <hr />
          <div className="blogSection">
            <p className="blogPara">
              Let's take three friends, and we'll name them Susan (age 25) ,
              Jerry (age 35) & Mark (age 45). They've all decided to put $1,000
              per month into their 401k plan for their retirement at age 65.
              They make a pact that they'll see through their promise of saving
              money for 10 years. We know that individual returns on investments
              will vary, but to keep things simple, let's just say all three
              friends will see an average of 7% return over the life of their
              investments (that's pretty standard when you invest your money for
              a long period of time, smoothing out for big up and down years).
              So how did these three friends fare?
            </p>
            <p className="blogPara">
              Remember 45 year-old Mark? He held up his end of the pack. He
              invested $1,000 every month for 10 years (a total of $120,000).
              When he turned 55 years old, he stopped investing and let his
              money take advantage of compounding interest. When he turned 65,
              that $120,000 that he invested over the years was worth $373,400.
              Not bad right? Remember, Mark invested $120,000 over 10 years, and
              then let his money work for him from ages 55 to 65. 20 total years
              of compounding interest helped out Mark---starting from when he
              started invested those first dollars to help his retirement fund
              grow.
            </p>
            <div className="imagePara">
              <p className="imageParaSection">
                Jerry has an even better story. Because he started at age 35, he
                had 10 years of compounding interest helping out his $120,000
                savings. But he stopped investing when he was 45, and had 20
                years of compounding interest helping out his nest egg from the
                time he stopped investing until he turned 65. Jerry's savings
                amount? $734,500. What a difference an extra 10 years makes!
                <br />
                <br />
                Finally, Susan. The earliest saver of them all. Maybe she had a
                Mother or Father like mine. She stopped investing when she was
                35 years old (for perspective, she was now the age when Jerry
                first started). You'd think that was too early to stop investing
                for retirement, right? Susan was able to take advantage of 30
                years of compounding interest from the time she stopped
                investing until she was 65. Her ending balance? $1,445,000! GO
                SUSAN!
              </p>
              <div className="imageBox">
                <img className="blogImage" src={totalsavings} alt="totalsavings" />
              </div>
            </div>
            <hr />
            <div className="imagePara">
              <p className="imageParaSection">
                This simple illustration should demonstrate that compounding
                interest works best when time is on your side. It's never too
                late to start investing in your 401k, and if you haven't
                started---I hope this simple illustration motivates you to get
                going! Whether you can save a lot or a little, the most
                important step is to take advantage of what you can control. You
                can't control whether the market goes up or down, but you can
                control how much you put away----and how consistently you do it.
                And subsequently, how much (or little) compounding interest can
                work for you!
              </p>
              <div className="imageBox">
                <img className="blogImage" src={simple} alt="simple" />
              </div>
            </div>
          </div>
          <hr />
        </div>
        <hr />
        <br />
        <hr />
      </div>
    );
  }
}
