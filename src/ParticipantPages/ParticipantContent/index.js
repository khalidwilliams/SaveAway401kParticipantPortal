import React from "react";
import SetUpInfo from "./SetUpPages/Info"

const ParticipantContent = props => {

    // Props will determine which content page is rendered
    let toRender;
    switch(props.currentPage) {
        case "Info": 
            toRender = <SetUpInfo />
            break;
        default: 
            toRender = <div>This is the default</div>
            break;
    }

    return(
        <div className="participant-content">
            {toRender}
        </div>
    )
           
}

export default ParticipantContent;