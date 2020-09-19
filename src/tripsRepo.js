class TripsRepo {
  constructor(tripsData) {
    this.tripsData = tripsData;
  }
  
   //get trip history by id
  historyByUserId(userId) {
    const filteredTrips = this.tripsData.trips.filter(trip => trip.userID === userId)
    // console.log(filteredTrips)
    return filteredTrips
  }
  //this is an array withh al the trips
  //rearrange data set so the id are keys and the {} are the values


}

export default TripsRepo;