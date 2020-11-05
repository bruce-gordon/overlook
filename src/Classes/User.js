export default class User {
  constructor(data, bookings, rooms) {
    this.id = data.id;
    this.name = data.name;
    this.bookings = this.getBookings(bookings);
    this.moneySpent = this.calculateMoneySpent(rooms);
    this.username = `customer${this.id}`;
    this.password = 'overlook2020';
  }

  getBookings(data) {
    let results = data.filter(booking => this.id === booking.userID);
    return results;
  }

  calculateMoneySpent(data) {
    let roomFees = this.getRoomCosts(data);
    let totalFee = roomFees.reduce((total, fee) => {
      return total + fee;
    }, 0);
    return totalFee;
  }

  getRoomCosts(data) {
    let charges = [];
    this.bookings.forEach(booking => {
      data.forEach(room => {
        if (booking.roomNumber === room.number) {
          charges.push(room.costPerNight);
        }
      })
    })
    return charges;
  }
  //
  // bookRoom(userID, date, roomNumber) {
  //
  // }
}
