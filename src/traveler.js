import User from './User'
import DestinationsRepo from '../src/destinationsRepo.js';
import moment from 'moment';

class Traveler extends User {
  constructor(userInfo, tripHistory, destinationsData) {
    super(userInfo);
    // this.id = userInfo.id;
    // this.name = userInfo.name;
    this.travelerType = userInfo.travelerType;
    this.today = moment().format('YYYY-MM-DD');
    this.travelHistory = tripHistory.userTripHistory || [];
    this.destinationsData = destinationsData;
    this.tripsHistory = this. getPastTrips();
    this.currentTrip  = this.getCurrentTrip() || [];
    this.upcomingTrips = this.getFutureTrips() || [];
    this.pendingTrips =  this.getTripsByStatus('pending');
    this.tripsThisYear = this.getTripByYears() || [];
    this.spentOverYearPlusFees = this.spentOverTheYear();
  }

  restructuredTripHistoryByDate() {
    const data = this.travelHistory.reduce((newData, entry) => {
      newData[entry.date] = entry
      return newData
    }, {})

    return data
  }

  getCurrentTrip() {
   const currentTrip = this.travelHistory.reduce((theTrip, trip) => {
    let startDate = moment(trip.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    let endDate = moment(startDate, 'YYYY-MM-DD').add(trip.duration, 'days').format('YYYY-MM-DD');
    if (moment(this.today, 'YYYY-MM-DD').isBetween(startDate, endDate)) {
      theTrip.push(trip)
    }
    return theTrip
   },[])
    return currentTrip
  }

   getFutureTrips() {
     const trips = this.travelHistory.reduce((tripsList, trip) => {
       if (moment(trip.date, 'YYYY-MM-DD').isAfter(this.today, 'YYYY-MM-DD')) {
         tripsList.push(trip)
       }
       return tripsList
      },[])

       return trips
     }
   
  getPastTrips(){
    const trips = this.travelHistory.reduce((tripsList, trip) => {
      if (moment(trip.date, 'YYYY-MM-DD').isBefore(this.today, 'YYYY-MM-DD')) {
        tripsList.push(trip)
      }
      return tripsList
     },[])
      return trips
  }

  getTripsByStatus(status) {
    const trips = this.travelHistory.filter(trip => {
      return trip.status === status
    })
    return trips
  }

  getTripByYears() {
    const currentYear = moment().year();
    const currentTrips = this.travelHistory.filter(trip => {
      return trip.date.split('/')[0] === currentYear.toString();
    }) 
    return currentTrips
  }

  spentOverTheYear() {
    const destinationsClass = new DestinationsRepo(this.destinationsData);
    const totalSpentOnCurrentYear = this.tripsThisYear.reduce((total, trip) => {
      total += destinationsClass.getDestinationCost(trip.destinationID, trip.duration, trip.travelers)
      return total
    }, 0);
    const totalPlusFee = ((10/ 100) * totalSpentOnCurrentYear + totalSpentOnCurrentYear).toFixed(2)
    console.log(totalPlusFee)
    return totalPlusFee
  } 
}

export default Traveler;