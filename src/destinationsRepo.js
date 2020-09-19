class DestinationsRepo {
    constructor(destinationsData) {
      this.destinationsData = destinationsData.destinations;
    }

    //get destinations by id
    getDestinationById(tripId) {
      const destination = this.destinationsData.find( destination => destination.id === tripId);
      // console.log(destination)
      return destination
    }

    // get destination cost by id, days and people count
    getDestinationCost(tripId, amountDays, amountPeople){
      const trip = new Array(this.getDestinationById(tripId));
      const totalCost = trip.reduce((total, trip) => {
        const totalPerDay = trip.estimatedLodgingCostPerDay * amountDays;
        const totalTripFlight = trip.estimatedFlightCostPerPerson * amountPeople;
        total = totalPerDay + totalTripFlight;
        return total;
      }, 0)
      // console.log( totalCost)
      return  totalCost
    }

  }

  export default DestinationsRepo ;