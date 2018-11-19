import React, { Component } from "react";
import ParticipantNav from "../ParticipantNavigation/index";
import ParticipantContent from "../ParticipantContent/index"

export default class AccountSetUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: "",
            navLinks: {
                setUp: ["Info", "Goals", "Portfolio"],
                profile: ["Dashboard", "Goals", "Learn", "Help"],
            }
        }
    }

    componentDidMount() {
        // console.log(this.props.currentPage)
        this.setState({currentPage: this.props.currentPage});
        
    }

    changePage = (newPage) => {
        this.setState({currentPage: newPage})
    }

    render() {
        return(
            <div className="account-page">
                <ParticipantNav linkList={this.state.navLinks.setUp} changePage={(e) => this.changePage(e.target.textContent)} />
                <ParticipantContent currentPage={this.state.currentPage} />               
                
            </div>
        )
    }
}