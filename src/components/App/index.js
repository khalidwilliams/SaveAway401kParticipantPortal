import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import AccountPage from "../Account";
import withAuthentication from "../Session/withAuthentication";
import Welcome from "../WelcomePage/Index";
import WhatWeDo from "../About/WhatWeDo";
import FundChoices from "../About/FundChoices";
import Pricing from "../About/Pricing";
import CompanyGeneralInfo from "../CompanyGeneralSignup/Index";
import CompanyEnrollmentInfo from "../CompanyEnrollment/Index";
import EmployeeInfo from "../CompanyEnrollment/EmployeeInfo";
import FreeGuide from "../FreeGuide/Index";
import Guide from "../FreeGuide/Guide";
import News from "../News/Index";
import Confirmation from "../CompanyEnrollment/Confirmation";
import * as routes from "../../constants/routes";
import "./index.css";

const App = () => (
  <Router>
    <div className="app">
      <Navigation />
      <Route exact path={routes.HOME} component={Welcome} />
      <Route exact path={routes.WELCOME} component={Welcome} />
      <Route exact path={routes.SIGN_UP} component={CompanyGeneralInfo} />
      <Route exact path={routes.LOG_IN} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.ABOUT} component={() => <WhatWeDo />} />
      <Route
        exact
        path={routes.FUNDCHOICES}
        component={() => <FundChoices />}
      />
      <Route exact path={routes.PRICING} component={() => <Pricing />} />
      <Route
        exact
        path={routes.ENROLL}
        component={() => <CompanyEnrollmentInfo />}
      />
      <Route
        exact
        path={routes.EMPLOYEEINFO}
        component={() => <EmployeeInfo />}
      />
      <Route exact path={routes.FREEGUIDE} component={() => <FreeGuide />} />
      <Route exact path={routes.GUIDE} component={() => <Guide />} />
      <Route exact path={routes.NEWS} component={() => <News />} />
      <Route exact path={routes.CONFIRM} component={() => <Confirmation />} />
    </div>
  </Router>
);

export default withAuthentication(App);
