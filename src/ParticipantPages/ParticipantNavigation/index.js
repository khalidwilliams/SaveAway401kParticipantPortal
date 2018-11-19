import React from "react";

const ParticipantNav = (props) => {
    return (
        <div className="participant-nav">
            <ul>
            {props.linkList.map((link) => {
                return (
                <li 
                    className="participant-nav-link"
                    onClick={(event) => props.changePage(event)}
                >
                    {link}
                </li>)
            })}

            </ul>
        </div>
    )
}

export default ParticipantNav;