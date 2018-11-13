import React, { Component } from "react";
import ParticipantSignUp from "./ParticipantSignUp/index";
import {Route} from "react-router";

export default class ParticipantPages extends Component {
    
    render() {
        return (
            <div id="participant-container">
                <div className="participant-header">
                    <img src={require("/Users/khalidwilliams/Projects/SaveAway401k/SaveAway401kParticipantPortal/src/ParticipantPages/Assets/ logo only.png")}></img>
                </div>

                                    {/* Render the ParticipantSignUp section if no one is logged in (need to work with auth for this) */}
                                    <Route exact path="/Participants/SignUp" component={ParticipantSignUp} />

            </div>
        )
    }

}