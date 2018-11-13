import React, { Component } from "react";


export default class ParticipantSignUp extends Component {

    render() {
        return (
            <div id="SignUp-container">
                <form className="participant-form">
                    <div className="form-item" id="sign-up-title" >
                        Sign Up and Start Saving Today! 
                    </div>

                    <label className="l1a">First Name </label>
                    <input id="participant-signup-fname" type="text"></input>   

                    <label classname="l1b" >Last Name </label>
                    <input id="participant-signup-lname" type="text"></input>

                    <label classname="l2">Email</label>
                    <input id="participant-signup-email" type="text" />

                    <label className="l3">Password</label>
                    <input id="participant-signup-password-1" type="password" />

                    <label className="l4">Confirm Password</label>
                    <input id="participant-signup-password-2" type="password" />

                    <label className="l5">Company</label>
                    <input id="participant-signup-company-dropdown" />

                    <input type="submit" value="submit" id="participant-signup-submit"/>
                </form>

            </div> 
        
        )
    }
}