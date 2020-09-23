class DestinationsRepo {
  constructor(destinationsData) {
    this.destinationsData = destinationsData;
  }

  getDestinationBy(spec, entry) {
    return this.destinationsData.destinations.find(destination => destination[spec] === entry);
  }

  getDestinationCost(tripId, amountDays, amountPeople) {
    const trip = new Array(this.getDestinationBy('id', tripId));
    const totalCost = trip.reduce((total, trip) => {
      const totalPerDay = trip.estimatedLodgingCostPerDay * amountDays;
      const totalTripFlight = trip.estimatedFlightCostPerPerson * amountPeople;
      total = totalPerDay + totalTripFlight;
      return total;
    }, 0)
    return  totalCost
  }

}

export default DestinationsRepo;