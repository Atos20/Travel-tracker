import User from './User'
import moment from 'moment';
class Traveler extends User {
  constructor(userInfo, tripHistory) {
    // console.log('I am in user=>',tripHistory)
    super(userInfo);
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.travelerType = userInfo.travelerType;
    this.today = moment().format('YYYY-MM-DD');
    this.travelHistory = tripHistory.userTripHistory || [];
    this.tripsHistory = []; //past trips
    this.currentTrip  = this.getCurrentTrip() || []; // || [] probably it will be just an object
    this.upcomingTrips = this.getFutureTrips() || [];
    this.pendingTrips = this. getPastTrips() || [];
    this.spentOverYear = 0;
    // console.log(this.travelHistory)
  }
   //what format makes more sense? //myabe having and array of 
   /*data : { "2020/10/04":{data},  "2020/10/04":{data},  "2020/10/04":{data}, date:{data}}*/

  restructuredTripHistoryByDate() {
    const data = this.travelHistory.reduce((newData, entry) => {
      newData[entry.date] = entry
      return newData
    }, {})
    // console.log(data)
    return data
  }
  //get currentTrip
  //currently not working as intended
  getCurrentTrip() {
   const currentTrip = this.travelHistory.reduce((theTrip, trip) => {
    let startDate = moment(trip.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    let endDate = moment(startDate, 'YYYY-MM-DD').add(trip.duration, 'days').format('YYYY-MM-DD');
    // if (moment(this.today, 'YYYY-MM-DD').isAfter(startDate, 'YYYY-MM-DD') && moment(this.today, 'YYYY-MM-DD').isBefore(endDate, 'YYYY-MM-DD')) {
    //   theTrip.push(trip)
    // }
    //this 👇🏽 is the same as th if statement above 🤦🏽‍♂️
    if (moment(this.today, 'YYYY-MM-DD').isBetween(startDate, endDate)) {
      theTrip.push(trip)
    }
    return theTrip
   },[])
    console.log(currentTrip)
    return currentTrip
  }

   //get furtureTrips
   getFutureTrips() {
     const trips = this.travelHistory.reduce((tripsList, trip) => {
      //  let startDate = moment(trip.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
       if (moment(trip.date, 'YYYY-MM-DD').isAfter(this.today, 'YYYY-MM-DD')) {
         tripsList.push(trip)
       }
       return tripsList
      },[])
      //  console.log(trips)
       return trips
     }
   
  //get pastTrips
  getPastTrips(){
    const trips = this.travelHistory.reduce((tripsList, trip) => {
      if (moment(trip.date, 'YYYY-MM-DD').isBefore(this.today, 'YYYY-MM-DD')) {
        tripsList.push(trip)
      }
      return tripsList
     },[])
      // console.log(trips)
      return trips
  }

  //Get pending trips/approved/
  getTripsByStatus(status) {
    const trips = this.travelHistory.filter(trip => {
      return trip.status === status
    })
    // console.log(trips)
    return trips
  }

  //get Trips By Year
  getTripByYears() {
    const currentYear = moment().year();
    const currentTrips = this.travelHistory.filter(trip => {
      return trip.date.split('/')[0] === currentYear.toString()
    }) 
    // console.log(currentTrips)
    return currentTrips
  }
  //Total amount I have spent on trips this year
  //claculate how much as a travler I have spent over the year
  //This should be calculated from the trips data and include a travel agent’s 10% fee
  spentOverTheYear() {
    
  }
}

export default Traveler;