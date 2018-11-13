import React, { Component } from "react";


export default class ParticipantSignUp extends Component {

    render() {
        return (
            <div id="SignUp-container">
                <form className="participant-form">
                    <div className="form-item" id="sign-up-title" >
                        Sign Up and Start Saving Today! 
                    </div>
                    <div className="form-item fname" >
                        {/* <label for="participant-signup-fname" type="text">First Name </label>
                        <input id="participant-signup-fname"></input> */}
                    </div>
                    <div className="form-item lname" >
                        {/* <label for="participant-signup-lname">Last Name </label>
                        <input id="participant-signup-lname" type="text"></input> */}

                    </div>
                    <div className="form-item participant-signup-email">
                        {/* <label for="participant-signup-email">Email</label>
                        <input id="participant-signup-email" type="text" /> */}
                    </div>
                    <div className="form-item" id="participant-signup-password-1">
                    
                    </div>
                    <div className="form-item" id="participant-signup-password-2">
                    
                    </div>
                    <div className="form-item" id="participant-signup-company-dropdown">
                    
                    </div>
                    <div className="form-item" id="participant-signup-submit">
                    
                    </div>
                </form>

            </div> 
        
        )
    }
}