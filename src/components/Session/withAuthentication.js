import React from "react";
import { inject } from "mobx-react";

import firebase from "../../firebase.js";
// firebase.initializeApp
var auth = firebase.auth();

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      console.log(auth);
      const { sessionStore } = this.props;

      auth.onAuthStateChanged(authUser => {
        authUser
          ? sessionStore.setAuthUser(authUser)
          : sessionStore.setAuthUser(null);
      });
    }

    render() {
      return <Component />;
    }
  }

  return inject("sessionStore")(WithAuthentication);
};

export default withAuthentication;
