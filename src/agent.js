import User from './User'
import moment from 'moment';
import TripsRepo from './tripsRepo';
class Agent extends User {
  constructor(agentData, alltrips, allDestinations, allTravelers) {
    super(agentData)
    this.agentId = agentData.agentId;
    this.name = agentData.name;
    this.userName = agentData.userName
    this.pwd = agentData.pwd;
    this.today = moment().format('YYYY-MM-DD');
    this.allTrips = alltrips.tripsData.trips
    this.allDestinations = allDestinations.destinationsData.destinations
    this.allTravelers = allTravelers.userTripHistory.travelers
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
      aprovedTrip.suggestedActivities = []//only status or sugg activities is required
      return aprovedTrip
    }, {});
    // console.log(modifiedTrip)
    return modifiedTrip
}
  //Total income generated this year (should be 10% of user trip cost)
  allCurrentYearsTrip(){
    const currentYear = moment().year();
    const thisYearsTrips = this.allTrips.filter(trip => trip.date.split('/')[0] === currentYear.toString()) 
    //find the information form those trips with destinations id
    // console.log(thisYearsTrips)
    return thisYearsTrips
  }

  gatherDataToCalculateAnnualIncome(){
    const currentYearTrips = this.allCurrentYearsTrip();
    console.log(currentYearTrips)
    const thisYearDestinations = currentYearTrips.map(trip => {
      return this.allDestinations.find(destination => destination.id === trip.destinationID)
    })
    return thisYearDestinations.map(destination => {
      const obj = {duration: 0, costPerDay: destination.estimatedLodgingCostPerDay, flightCostPerPerson: destination.estimatedFlightCostPerPerson}
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
    // console.log((10/ 100) * annualIncome)
    return (10/ 100) * annualIncome
  }
  //Travelers on trips for today’s date 
  //(number, names, however you want to display this!)
  todaysTotalTravelers(){
    
  }

  //get travelersby date
  getTavelersByDate(){
  
  }

  searchForUserByName(){

    /*
    View their name, a list of all of their trips, and the total 
    amount they’ve spent (including 10% agent cut)
    Approve a trip request for that user
    Delete an upcoming trip for that user
    */
  }



}
  export default Agent;