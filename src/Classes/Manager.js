import User from './User';

export default class Manager extends User {
  constructor(data, bookings, rooms) {
    super(data, bookings, rooms);
  }

  selectUser(name, userData, bookingsData, roomsData) {
    let user = userData.find(userObject => userObject.name === name);
    this.id = user.id;
    this.name = user.name;
    this.bookings = this.getUserBookings(bookingsData);
    this.moneySpent = this.calculateMoneySpent(roomsData);
  }

  deleteBookedRoom(idNumber) {
    return { "id": idNumber };
  }
}
