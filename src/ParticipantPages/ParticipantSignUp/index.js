import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { auth, db } from "../../firebase.js";
import pStore from "../../stores/ParticipantStore";


const INITIAL_STATE = {
    fname: "",
    lname: "",
    email: "",
    password1: "",
    password2:"",
    company: "",
    error: "",
}

export default class ParticipantSignUp extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            ...INITIAL_STATE,
            redirect: false,
        }
    }

    // Add realtime listener


    handleChange(e) {
        var val  = e.target.value
        var id = e.target.id;
        // console.log(this.state)
        switch(id) {
            default:
                break;
            case "participant-signup-fname":
                this.setState({fname:val});
                break;
            case "participant-signup-lname":
                this.setState({lname:val})
                break;
            case "participant-signup-email":
                this.setState({email:val})
                break;
            case "participant-signup-password-1":
                this.setState({password1: val})
                break;
            case "participant-signup-password-2":
                this.setState({password2: val})
                break;
            case "participant-signup-company-dropdown":
                this.setState({company:val})
                break;
            
        }

        this.setState({c: val})
    }

    handleSubmit(event) {
        event.preventDefault();
        let {email, password1, company, fname, lname} = this.state;
        (this.state.password1 === this.state.password2 ? 
            //check that the user doesn't exist in the database, if not, add them 
            auth
                .createUserWithEmailAndPassword(email, password1)
                .then((user) => {
                    let id = user.uid;
                    let usersRef = db.ref("/users");
                    

                    let newUserRef = usersRef.push();
                    console.log(usersRef)

                    newUserRef.set({
                        email: email,
                        password: password1,
                        company: company,
                        first_name: fname,
                        last_name: lname,
                        setUpComplete: false,
                    })

                    console.log(newUserRef)
                    console.log(newUserRef.key);


                    let participant = this.state;
                    // console.log(participant)
                    pStore.setParticipant(participant, newUserRef.key)
                    pStore.firstTime();
                    
                })
                .then(() => {
                    this.setState({redirect:true})
                })
                .catch((error) => {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(error)
                    alert(errorMessage);
                })

               
            
            :
            // alert("Passwords must match")
            this.setState({password2:""})
               
        )

        auth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser);

            } else {
                console.log("logged out");
            }
        })

    }

    test(){
        // let ref = db.ref();
        // console.log(ref);
        // ref.set('/users');
        // console.log('ref: ', ref)
        // console.log('ref/users: ', ref.child("/users"))
        let participant = this.state;
        pStore.setParticipant(participant)
        console.log(pStore)
        console.log(participant)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/Participants/SetUp" />
        }
        return (
            <div id="SignUp-container">
                <form className="participant-form">
                    <div className="form-item" id="sign-up-title" >
                        Sign Up and Start Saving Today! 
                    </div>

                     <div className="form-info">* = required field </div>

                    <label className="l1a">First Name* </label>
                    <input required value={this.state.fname} id="participant-signup-fname" type="text" onChange={event => this.handleChange(event)}></input>   

                    <label className="l1b" >Last Name* </label>
                    <input required value={this.state.lname} id="participant-signup-lname" type="text" onChange={event => this.handleChange(event)}></input>

                    <label className="l2">Email*</label>
                    <input required value={this.state.email} id="participant-signup-email" type="text" onChange={event => this.handleChange(event)} />

                    <label className="l3">Password*</label>
                    <input required value={this.state.password1} id="participant-signup-password-1" type="password" onChange={event => this.handleChange(event)} />

                    <label className="l4">Confirm Password*</label>
                    <input required value={this.state.password2} id="participant-signup-password-2" type="password" onChange={event => this.handleChange(event)} />

                    <label className="l5">Company*</label>
                    <input required value={this.state.company} id="participant-signup-company-dropdown" onChange={event => this.handleChange(event)} />

                    <input type="button" value="submit" id="participant-signup-submit" onClick={(event) => this.handleSubmit(event)} />
                </form>

                {/* <button className="btn test-btn" onClick={() => this.test()}>Test</button> */}

            </div> 
        
        )
    }
}