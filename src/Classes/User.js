export default class User {
  constructor(data, bookings, rooms) {
    this.id = data.id;
    this.name = data.name;
    this.bookings = this.getUserBookings(bookings);
    this.moneySpent = this.calculateMoneySpent(rooms);
  }

  getUserBookings(bookingsData) {
    let reservations = bookingsData.filter(booking => this.id === booking.userID);
    let results = reservations.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    return results;
  }

  updateUserBookings(bookingsData) {
    this.bookings = this.getUserBookings(bookingsData);
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

  bookRoom(date, roomNumber) {
    return {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    }
  }
}
