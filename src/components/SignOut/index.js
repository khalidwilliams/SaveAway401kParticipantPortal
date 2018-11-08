import React from "react";
import { auth } from "../../firebase.js";

const SignOutButton = () => (
  <button type="button" onClick={auth.doSignOut} id="signOutButton">
    Sign Out
  </button>
);

export default SignOutButton;
