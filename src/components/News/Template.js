import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Template extends React.Component {
  render() {
    return (
      <div>
        <div id="blogHeader">
          <h1 id="blogTitle"> </h1>
          <h3 id="blogDate"></h3>
        </div>
        <div id="blogContent">
        <div id="blogSection">
        <img id="blogImage" src={} alt="" />
          <h4 id="sectionTitle"> </h4>
          <p id="blogPara" > </p>
        </div>

        <div id="imagePara">
          <p id="imageParaSection"> </p>
            <div id="imageBox">
              <img
                id="blogImage"
                src={}
                alt=""
              />
              <p id="imageDescription">
              </p>
            </div>
        </div>


        </div>
      </div>
    );
  }
}
