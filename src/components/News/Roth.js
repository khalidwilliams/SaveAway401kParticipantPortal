import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RothPic from "./Assets/RothPic.png";
import UnmarriedTaxbrackets from "./Assets/UnmarriedTaxbrackets.png";
import MarriedTaxbrackets from "./Assets/MarriedTaxbrackets.png";
import crystalBall from "./Assets/crystalBall.png";
import GDP from "./Assets/GDP.png";

export default class Roth extends React.Component {
  render() {
    return (
      <div className="Roth">
        <div className="blogHeader">
          <h1 className="blogTitle"> To Roth or Not to Roth? </h1>
          <h3 className="blogDate">June 19, 2018</h3>
        </div>
        <div className="blogContent">
          <img className="blogSingleImage" src={RothPic} alt="Roth or no?" />
          <div className="blogSection">
            <h4 className="sectionTitle">OKAY....</h4>
            <p className="blogPara">
              .....401k plans weren't 'a big thing' during Shakespeare's time,
              but I hope the title got your attention because one of the biggest
              questions I get when it comes to making contributions into a 401k
              is whether a participant should make 'Roth' 401k Contributions, or
              ‘Traditional’ 401k Contributions? It seems in the present day,
              many companies that have plans have both options.
            </p>
            <p className="blogPara">
              It’s a conversation that is hotly contested by many, and partially
              influenced by political and economic decisions. The only thing
              everyone seems to agree on is that it will depend on factors in
              the future that are out of our control, today.
            </p>
            <p className="blogPara">
              The aim of this blog post it to supply you with enough information
              about Traditional and Roth 401k plans, and then provide you with
              some of the surrounding arguments people have in that support
              their preference. Once you have the information, you can frame
              your opinion, do a little bit more research, and then make a plan
              on how you want to participate.
            </p>
            <p className="blogPara">
              First up, let’s talk briefly about the different plans:
            </p>
          </div>
          <div className="blogSection">
            <h4 className="sectionTitle">TRADITIONAL 401K:</h4>
            <p className="blogPara">
              The 401k investment vehicle was passed by Congress in 1978 as an
              add-on to tax code section 401. It allowed you to put tax-free
              dollars into an account ear-marked for retirement. The money you
              contributed to your 401k wouldn’t be counted as taxable income in
              the year you made the contribution, but you’ll pay tax on the
              withdrawals at the Federal Tax rate when you take a withdrawal
              from the account (preferably after the age 59 1/2).{" "}
            </p>
            <hr />
            <div className="imagePara">
              <p className="imageParaSection">
                Quick example: Sally is a single gal living in the city in 2018.
                She ends up making $100,000, but she puts $10,000 into her
                traditional 401k. Just to make it simple, we’ll assume no other
                complications to her tax situation. Her taxable income is
                $90,000 for 2018.
              </p>
              <div className="imageBox">
                <img
                  className="blogImage"
                  src={UnmarriedTaxbrackets}
                  alt="UnmarriedTaxbrackets"
                />
                <p className="imageDescription">
                  Tax Bracket rates for Unmarried Individuals who are filing a
                  tax return in 2018.
                </p>
              </div>
            </div>
            <p className="blogPara">
              Rather than pay the 28% tax rate this year (which is the tax
              bracket for $100,000 earners), she will drop down into the 25% tax
              rate (which is the rate for earners between $38,700-$93,700) and
              defer any tax on her $10,000 contribution.
            </p>
            <p className="blogPara">
              Think about this scenario for a second. Not only has Sally put
              away some fantastic money for later in life, she has effectively
              lowered her taxable income. Some quick calculations utilizing the
              table to the above right will show that Sally has actually lowered
              her tax burden by $2,689 for 2018!
            </p>
            <p className="blogPara">
              Now the year is 2040, and let’s assume Sally is ready to withdraw
              that money (and the tax code is exactly the same in 2040 as it was
              in 2018). Let’s just say she withdraws only $10,000 that year. Her
              tax rate is only 15% (once again, refer to the 2018 chart above),
              and she has effectively paid 13% less tax than if she would have
              taken this money in 2018 (not factoring in Time Value). As you can
              see, in a Traditional 401k you will have to pay taxes on any
              proceeds you make from investment gains when you withdraw the
              money
            </p>
            <hr />
          </div>
          <div className="blogSection">
            <h4 className="sectionTitle"> ROTH 401K:</h4>
            <p className="blogPara">
              The Roth 401k option is relatively new, being created in 2006. It
              is a follow on program from the Roth IRA which was instituted in
              1997, and is named for The Delaware Senator that sponsored the
              legislation, named William Roth.
            </p>
            <p className="blogPara">
              The Roth works in almost the opposite way as the Traditional 401k.
              When you fund your Roth 401k, you effectively agree to pay today’s
              tax rate in full, but future withdrawals that you make from your
              retirement account will be completely tax free.
            </p>
            <div className="imagePara">
              <p className="imageParaSection">
                Quick example: Jennifer and her husband Mark have a combined
                income of $200,000 but they both put $10,000 each into their
                respective Roth 401k plans at work. Once again, to keep things
                simple, we’ll assume no other adjustments to their taxable
                income. Their taxable income is still $200,000 for 2018, because
                a Roth Contribution is not Tax deductible in the year it is
                made. Jennifer and Mark will still have to pay the effective tax
                rate of 28%.
              </p>
              <div className="imageBox">
                <img
                  className="blogImage"
                  src={MarriedTaxbrackets}
                  alt="MarriedTaxbrackets"
                />
                <p className="imageDescription">
                  Tax Bracket rates for Married Individuals who are filing a
                  joint tax return in 2018.
                </p>
              </div>
            </div>
            <p className="blogPara">
              Now the year is 2040, and let’s assume they are ready to withdraw
              that $20,000. The tax rate on the withdrawal and any of the
              proceeds they have gained will not be taxed. Regardless of
              appreciation or depreciation of the funds, and regardless of what
              changes have happened to tax brackets via tax code amendments,
              they have already fulfilled their taxable responsibility when they
              made the contribution in 2018.
            </p>
          </div>
          <hr />
          <div className="blogSection">
            <h4 className="sectionTitle">
              OKAY, I UNDERSTAND THE DIFFERENCE---SO WHICH ONE SHOULD I DO?
            </h4>
            <p className="blogPara">
              Now that you understand the different plans, here is what is the
              same about both plans: You can pack away up to $18,500 of your own
              money, (and $55,000 combined with contributions from your
              employer) and then withdraw them in retirement. Obviously,
              whichever plan you use you will allow you some tax relief either
              today (Traditional) or later on down the road at retirement
              (Roth).
            </p>
            <div className="imagePara">
              <p className="imageParaSection">
                So here comes the big unknown---What will your federal income
                tax bracket be when you want to start taking withdrawals years
                from now? It almost requires a crystal ball to know the answer
                to this question, but the answer to that question could have a
                material impact on your retirement savings!
              </p>
              <div className="imageBox">
                <img className="blogImage" src={crystalBall} alt="crystalBall" />
              </div>
            </div>
            <p className="blogPara">
              Many things can happen between now and then that could effect that
              tax bracket, sending it lower; it could potentially remain
              unchanged; or any potential tax code changes could see the tax
              rate drift higher (potentially even drastically higher). People
              debate the merits of all three scenarios tirelessly, and here are
              the general arguments for each. As you read through these
              arguments, which one do you generally believe to be most likely to
              occur?
            </p>
            <p className="blogPara">
              The tax rate will be even lower when I withdrawal my money: A
              person who believes this statement might make the argument:
              “Wealthy individuals in America keep getting even more wealthy. In
              fact, a larger percentage of wealth is owned by the top 1% then
              ever before in American History. Our Government will be able to
              make up Social Services shortfalls by taxing wealthy Americans at
              a greater rate, without drastically effecting their overall
              wealth. If this happens, I believe that the tax rate for
              lower-income workers will fall below present levels today because
              the government will try to make it easier for lower-income workers
              to retain income and give them a shot at middle-income status. For
              these reasons, I believe the tax brackets on lower income earners
              will be lower in the future than it is today.“
            </p>
            <p className="blogPara">
              Do you align with that statement? If that sounds right to you,
              you'll want to do more research into Traditional 401k plans.
            </p>
            <p className="blogPara">
              The tax rate will remain about the same: A person who believes
              this statement might make the argument: “Because low income
              earners pay a lower tax rate, retirees that are withdrawing funds
              from their 401k in future years will also be able to show only a
              small amount of annual income from retirement. They will also be
              lumped in with low-income workers in the applicable tax bracket. I
              don’t believe the Government, no matter who is elected, will make
              material changes to this system moving forward. It will stay about
              the same as it is today”.
            </p>
            <p className="blogPara">
              Do you align with that statement? Depending on how much you
              withdrawal in any given year (reference the tax rate charts
              above), a Traditional 401k plan might be a good fit for you.
            </p>

            <div className="imagePara">
              <p className="imageParaSection">
                The Tax rate is going to go up: A person who believes this
                statement might make the argument: “It is a strong possibility
                that the U.S. Government will have to raise tax rates for
                low-income workers, and potentially all workers. I'm worried
                that America is taking in less money in taxes they they are
                spending, and that Debt (as a percentage of GDP) has been rising
                pretty dramatically over the last 10 years (see chart to the
                left). I think it is probable the Government could pass a law to
                tax retirement income at a higher rate. I believe this is a
                possibility because government deficits continue to rise and
                this is the only logical place where The Government can get
                funds in the magnitude needed to make up for that shortfall.”
              </p>
              <div className="imageBox">
                <img className="blogImage" src={GDP} alt="GDP" />
                <p className="imageDescription">
                  A 50-year chart showing America's Debt-to-GDP ratio.
                </p>
              </div>
            </div>
            <p className="blogPara">
              Do you align with that statement? If you think it's possible the
              government could make changes, and you want to protect yourself
              from any potential future changes, a Roth 401k plan might be a
              good fit for you.
            </p>
            <p className="blogPara">
              So, the main question that will help you decide which plan is
              right for you will be anchored in your beliefs about what tax
              policy will be like in the future when you are ready to start
              making withdrawals. Use this blog post as a basis for doing some
              more research into what people other trusted people and
              organizations are saying.
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
