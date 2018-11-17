import { observable, action, autorun} from "mobx";


class ParticipantStore {
    // class to store current participant data during set up 
    constructor() {
        this.participantLoggedIn = false;
        this.currentParticipant = {};
        this.participantPage = false;

    }

    @observable participantLoggedIn;
    @observable currentParticipant;
    @observable participantPage;


    setParticipant = participant => {
        this.currentParticipant.email = participant.email;
        this.currentParticipant.fname = participant.fname;
        this.currentParticipant.lname = participant.lname;
        this.participantLoggedIn = true;
        console.log("set")
        console.log(this.currentParticipant)

    }

    firstTime = () => { 
        // This will be set to true after the Set Up pages have been filled out completely
        this.currentParticipant.setUpComplete = false;  
        console.log(this.currentParticipant)
    }
}

autorun(() => {
    console.log("partcipant status changed")
    console.log(this.participantLoggedIn);
    console.log(this.currentParticipant)
})

const pStore = new ParticipantStore();

// export default observable.box(pStore);
export default pStore;