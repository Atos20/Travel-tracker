class TripsRepo {
  constructor(tripsData) {
    this.tripsData = tripsData;
  }
  
   //get trip history by id
  historyByUserId(id) {
    const filteredTrips = this.tripsData.trips.filter(trip => trip.userID === id)
    // console.log(filteredTrips)
    return filteredTrips
  }
  //this is an array withh al the trips
  //rearrange data set so the id are keys and the {} are the values


}

export default TripsRepo;