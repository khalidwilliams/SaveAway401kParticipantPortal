import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Template extends React.Component {
  render() {
    return (
      <div>
        <div className="blogHeader">
          <h1 className="blogTitle"> </h1>
          <h3 className="blogDate"></h3>
        </div>
        <div className="blogContent">
        <div className="blogSection">
        <img className="blogImage" src={} alt="" />
          <h4 className="sectionTitle"> </h4>
          <p className="blogPara" > </p>
        </div>

        <div className="imagePara">
          <p className="imageParaSection"> </p>
            <div className="imageBox">
              <img
                className="blogImage"
                src={}
                alt=""
              />
              <p className="imageDescription">
              </p>
            </div>
        </div>


        </div>
      </div>
    );
  }
}
