import React from "react";

const SetUpInfo = props => { 

    //"psu1" stands for "participant-set-up-pg1" 

    return (
        <div id="set-up-info-container">
            <form id="set-up-info-form">
                <label id="psu1-name">Name</label>
                <input id="psu1-fname-input" />
                <input id="psu1-lname-input" />
                <label id="psu1-age">Current Age</label>
                <input id="psu1-age-input" />
                <label id="psu1-existing">Existing 401k?</label>
                <input id="psu1-existing-input" />
                <label id="psu1-name">Name</label>
                <input id="psu1-name-input" />

            </form>
        </div>
    )
}

export default SetUpInfo;