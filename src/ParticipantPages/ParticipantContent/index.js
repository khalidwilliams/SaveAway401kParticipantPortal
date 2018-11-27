import React from "react";
import SetUpInfo from "./SetUpPages/Info";
import GoalsPage from "./SetUpPages/Goals";
import PortfolioInfo from "./SetUpPages/Portfolio";

const ParticipantContent = props => {

    // Props will determine which content page is rendered
    let toRender;
    switch(props.currentPage) {
        case "Info": 
            toRender = <SetUpInfo change={() => props.changePage}/>
            break;
        case "Goals":
            toRender = <GoalsPage />
            break;
        case "Portfolio":
            toRender = <PortfolioInfo />
            break;
        default: 
            toRender = <div>This is the default</div>
            break;
    }

    console.log("currentPage is ", props.currentPage)

    return(
        <div className="participant-content">
            {toRender}
        </div>
    )
           
}

export default ParticipantContent;