import User from './User'
import moment from 'moment';
class Traveler extends User {
  constructor(userInfo) {
    super(userInfo);
    // this.id = userInfo.id;
    // this.name = userInfo.name;
    this.type = userInfo.type;
    this.tripsHistory = []; //past trips
    this.currentTrip  = {} ; // || [] probably it will be just an object
    this.upcomingTrips = [];
    this.pendingTrips = [];
    this.spentOverYear = 0;
  }
   //what format makes more sense?
  //get trip history
  getTripHistory() {
   
  }

  //get currentTrip
  getCurrentTrip() {

  }
  //get furtureTrips
  getFutureTrips() {

  }
  //Get pending trips
  getPendingTrips() {

  }
  //Total amount I have spent on trips this year
  //claculate how much as a travler I have spent over the year
  //This should be calculated from the trips data and include a travel agent’s 10% fee
  spentOverTheYear() {

  }
}

export default Traveler;