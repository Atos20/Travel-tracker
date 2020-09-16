import User from './User'
class Traveler extends User {
  constructor(userInfo) {
    super(userInfo);
    // this.id = userInfo.id;
    // this.name = userInfo.name;
    this.type = userInfo.type;
    this.tripsBooked = [];

  }
}

export default Traveler;