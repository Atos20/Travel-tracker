import User from './User'
// import TripsRepo from '../src/TripsRepo.js';
import moment from 'moment';
class Traveler extends User {
  constructor(userInfo, tripHistory) {
    // console.log('I am in user=>',tripHistory)
    super(userInfo);
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.travelerType = userInfo.travelerType;
    this.travelHistory = tripHistory.userTripHistory || [];
    this.tripsHistory = []; //past trips
    this.currentTrip  = {} ; // || [] probably it will be just an object
    this.upcomingTrips = [];
    this.pendingTrips = [];
    this.spentOverYear = 0;
    // console.log(this.travelHistory)
  }
   //what format makes more sense? //myabe having and array of 
   /*[ "2020/10/04":{data},  "2020/10/04":{data},  "2020/10/04":{data}, date:{data}]*/

  restructuredTripHistoryByDate() {
    return this.travelHistory.reduce((newData, entry) => {
      newData.push({[entry.date] : entry})
      return newData
    }, [])
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