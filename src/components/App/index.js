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
      <Route exact path={routes.LANDING} component={Welcome} />
      <Route exact path={routes.SIGN_UP} component={CompanyGeneralInfo} />
      <Route exact path={routes.LOG_IN} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.HOME} component={Welcome} />
      <Route exact path="/About" component={WhatWeDo} />
      <Route exact path="/WhatWeDo" component={WhatWeDo} />
      <Route exact path="/FundChoices" component={FundChoices} />
      <Route exact path="/Pricing" component={Pricing} />
      <Route exact path="/Enroll" component={CompanyEnrollmentInfo} />
      <Route exact path="/EmployeeInfo" component={EmployeeInfo} />
      <Route exact path="/Free-Guide" component={FreeGuide} />
      <Route exact path="/Guide" component={Guide} />
      <Route exact path="/401K-News" component={News} />
      <Route exact path="/Confirmation" component={Confirmation} />
      <hr />
    </div>
  </Router>
);

export default withAuthentication(App);
