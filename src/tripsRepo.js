class TripsRepo {
  constructor(tripsData) {
    this.tripsData = tripsData;
  }

  historyByUserId(userId) {
    const filteredTrips = this.tripsData.trips.filter(trip => trip.userID === userId)
    return filteredTrips
  }



}

export default TripsRepo;