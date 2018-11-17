import { observable, action, autorun} from "mobx";


class ParticipantStore {
    // class to store current participant data during set up 
    constructor() {
        this.participantLoggedIn = false;
        this.currentParticipant = {};

    }

    setParticipant = participant => {
        this.currentParticipant.email = participant.email;
        this.currentParticipant.fname = participant.fname;
        this.currentParticipant.lname = participant.lname;
        this.participantLoggedIn = true;
        console.log("set")

    }
}

autorun(() => {
    console.log("partcipant status changed")
})

const pStore = new ParticipantStore();

export default observable.box(pStore);