import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SimpleStorage from "../../stores/SimpleStorage";

export default class States extends React.Component {
  constructor() {
    super();
    this.state = {
      State: ""
    };
    this.initialState = this.state;
  }

  handleStateChange = event => {
    this.setState({ State: event.target.value }, () => {
      this.props.handleStatesChange(this.state);
    });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <select
          name="State"
          id="signupInputDrop"
          onChange={this.handleStateChange}
          value={this.state.State}
        >
          <option value="" disabled selected>
            Select an option..
          </option>
          <option>Alabama</option>
          <option>Alaska</option>
          <option>Arizona</option>
          <option>Arkansas</option>
          <option>California</option>
          <option>Colorado</option>
          <option>Connecticut</option>
          <option>Delaware</option>
          <option>Florida</option>
          <option>Georgia</option>
          <option>Hawaii</option>
          <option>Idaho</option>
          <option>Illinois</option>
          <option>Indiana</option>
          <option>Iowa</option>
          <option>Kansas</option>
          <option>Kentucky</option>
          <option>Louisiana</option>
          <option>Maine</option>
          <option>Maryland</option>
          <option>Massachusetts</option>
          <option>Michigan</option>
          <option>Minnesota</option>
          <option>Mississippi</option>
          <option>Missouri</option>
          <option>Montana</option>
          <option>Nebraska</option>
          <option>Nevada</option>
          <option>New Hampshire</option>
          <option>New Jersey</option>
          <option>New Mexico</option>
          <option>New York</option>
          <option>North Carolina</option>
          <option>North Dakota</option>
          <option>Ohio</option>
          <option>Oklahoma</option>
          <option>Oregon</option>
          <option>Pennsylvania</option>
          <option>Rhode Island</option>
          <option>South Carolina</option>
          <option>South Dakota</option>
          <option>Tennessee</option>
          <option>Texas</option>
          <option>Utah</option>
          <option>Vermont</option>
          <option>Virginia</option>
          <option>Washington</option>
          <option>West Virginia</option>
          <option>Wisconsin</option>
          <option>Wyoming</option>
        </select>
      </div>
    );
  }
}
