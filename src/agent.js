import User from './User'
import moment from 'moment';
class Agent extends User {
  constructor(agentData, alltrips, allDestinations, allTravelers) {
    super(agentData)
    this.id = agentData.agentId;
    this.name = agentData.name;
    this.userName = agentData.userName
    this.pwd = agentData.pwd;
    this.allTrips = alltrips.tripsData.trips
    this.allDestinations = allDestinations.destinationsData.destinations
    this.allTravelers = allTravelers.userTripHistory.travelers
  }

  //get userpending trips
  getAllPendingTrips(){
    
  }

  //I should be able to see and approve / deny trip requests
  //after getting the information of all users by data
  resolvePendingTrips(){

}
  //Total income generated this year (should be 10% of user trip cost)
  calculateAnnualIncome(){

  }

  //Travelers on trips for today’s date 
  //(number, names, however you want to display this!)
  todaysTotalTravelers(){
    //return an object with the number, names and trip status{}
  }

  //get travelersby date
  getTavelersByDate(){

  }

  searchForUserByName(){

    /*
    View their name, a list of all of their trips, and the total amount they’ve spent (including 10% agent cut)
Approve a trip request for that user
Delete an upcoming trip for that user
    */
  }



}
  export default Agent;