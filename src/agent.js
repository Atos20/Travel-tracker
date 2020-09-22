import User from './User'
import moment from 'moment';
import TripsRepo from './tripsRepo';
class Agent extends User {
  constructor(agentData, alltrips, allDestinations, allTravelers) {
    super(agentData);
    this.agentId = 1 || agentData.agentId;
    this.name = 'Juan Perez' || agentData.name;
    this.userName = 'agency' || agentData.userName;
    this.pwd = "travel2020" || agentData.pwd;
    this.today = moment().format('YYYY-MM-DD');
    this.allTrips = alltrips.tripsData.trips;
    this.allDestinations = allDestinations.destinationsData.destinations;
    this.allTravelers = allTravelers.userTripHistory.travelers;
    this.earnings = this.calculateAnnualIncome();
    this.pendingTrips = this.getAllPendingTrips();
    this.todaysTrips = this.getTavelersByDate( this.today);
  }
  
  getAllPendingTrips(){
    const allPendings = this.allTrips.filter(trip => trip.status === 'pending');
    return allPendings
  }

  resolvePendingTrips(tripID, decision){
    const allPendings = this.getAllPendingTrips();
    const pendingTrip = allPendings.find(trip => trip.id === tripID);
    const modifiedTrip = new Array(pendingTrip).reduce((aprovedTrip, entry) => {
      aprovedTrip.id = entry.id;
      aprovedTrip.status = decision;
      aprovedTrip.suggestedActivities = []
      return aprovedTrip
    }, {});
    return modifiedTrip
}

  allCurrentYearsTrip(){
    const currentYear = moment().year();
    const thisYearsTrips = this.allTrips.filter(trip => trip.date.split('/')[0] === currentYear.toString()) 
    return thisYearsTrips
  }

  gatherDataToCalculateAnnualIncome(){
    const currentYearTrips = this.allCurrentYearsTrip();
    const thisYearDestinations = currentYearTrips.map(trip => {
      return this.allDestinations.find(destination => destination.id === trip.destinationID)
    })
    return thisYearDestinations.map(destination => {
      const obj = {
        duration: 0, 
        costPerDay: destination.estimatedLodgingCostPerDay, 
        flightCostPerPerson: destination.estimatedFlightCostPerPerson
      }
      currentYearTrips.forEach(trip => {
       if(destination.id === trip.destinationID){
         obj.duration = trip.duration
       }
      });
      return obj
    })
  }

  calculateAnnualIncome() {
    const data = this.gatherDataToCalculateAnnualIncome()
    const annualIncome = data.reduce((total, entry) => {
      total += (entry.costPerDay* entry.duration) + (entry.flightCostPerPerson* entry.duration)
      return total
    }, 0)
    return (10/ 100) * annualIncome
  }
  
  getTavelersByDate(date){
    const todaysTrip = this.allTrips.filter(trip => {
      const newDateFormatOne = moment(trip.date,'YYYY-MM-DD').format('YYYY-MM-DD');
      const newDateFormatTwo = moment(date,'YYYY-MM-DD').format('YYYY-MM-DD');
      return newDateFormatOne === newDateFormatTwo
    })
    return todaysTrip
  }

  currentTravelersOnTrips(){
    const allCurrentTrip = this.allTrips.reduce((theTrip, trip) => {
      let startDate = moment(trip.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
      let endDate = moment(startDate, 'YYYY-MM-DD').add(trip.duration, 'days').format('YYYY-MM-DD');
      if (moment(this.today, 'YYYY-MM-DD').isBetween(startDate, endDate) && trip.status === 'approved') {
        theTrip.push(trip)
      }
      return theTrip
     },[]);
      return allCurrentTrip
  }

  searchForUserByName(name){
  const travelerPersonal = this.allTravelers.find(traveler => traveler.name === name);
  const getTravelersTrips = this.allTrips.filter(trip => trip.userID === travelerPersonal.id);
  const getDestinationsIDs = getTravelersTrips.map(trip => trip.destinationID);
  const travelersDestinations = getDestinationsIDs.map(id => {
    return this.allDestinations.find(destination => destination.id === id);
  })
 
  const travelerData = this.allTrips.reduce((data, trip) => {
    data.timeTraveling += trip.duration
    data.name = travelerPersonal.name
    data.travelerType = travelerPersonal.travelerType
    const totalCost = travelersDestinations.reduce((total, destination) => {
      if(!data.destination.includes(destination.destination))
      data.destination.push(destination.destination)
      total += (destination.estimatedLodgingCostPerDay* trip.duration) + (destination.estimatedFlightCostPerPerson* trip.duration)
      return total
    },0)
    data.totalSpent = totalCost + ((10/ 100) *  totalCost)
    return data
  }, {destination:[], totalSpent: 0, timeTraveling: 0})
  return travelerData
  }
}

export default Agent;