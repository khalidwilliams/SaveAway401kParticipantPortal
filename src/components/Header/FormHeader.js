import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./Assets/logo.png";

export default function FormHeader() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>
    </header>
  );
}
