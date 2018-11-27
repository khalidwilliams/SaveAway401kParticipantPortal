import React from "react";
import pStore from "../../../stores/ParticipantStore";

const SetUpInfo = props => { 

    //"psu1" stands for "participant-set-up-pg1" 

    console.log(this)

    return (
        <div id="set-up-info-container">
            <h2>Please Verify and Enter Your Information</h2>
            <form id="set-up-info-form">
                <label id="psu1-fname">First Name</label>
                <label id="psu1-lname">Last Name</label>
                <input id="psu1-fname-input" value={pStore.currentParticipant.fname}/>
                <input id="psu1-lname-input" value={pStore.currentParticipant.lname}/>
                <label id="psu1-phone">Phone Number (mobile)</label>
                <input id="psu1-phone-input" />
                <label id="psu1-age">Current Age</label>
                <input id="psu1-age-input" />
                <label id="psu1-existing">Existing 401k?</label>
                <div id="psu1-existing-input">
                    <div>
                        <input type="radio" value="Yes" />Yes
                    </div>
                    <div>
                        <input type="radio" value="No" />No                    
                    </div>
                </div>
                

            </form>

            {/* 
            The callback with this button is not working right now
            <button onClick={props.change("Goals")}>Next</button> 
            */}
        </div>
    )
}

export default (SetUpInfo);