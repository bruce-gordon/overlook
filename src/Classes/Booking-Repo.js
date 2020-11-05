export default class BookingRepo {
  constructor(bookingsData, roomsData) {
    this.allBookings = bookingsData;
    this.rooms = roomsData;
  }

  findBookingsByDate(date) {
    let result = this.allBookings.reduce((total, booking) => {
      if (booking.date === date) {
        total.push(booking);
      }
      return total;
    }, [])
    return result;
  }

  findOccupiedRoomsPercent(date) {
    let occupied = this.findBookingsByDate(date);
    let percent = (occupied.length / this.rooms.length).toFixed(2);
    return `${(percent * 100)}%`
  }

  findNumberOfAvailableRooms(date) {
    let occupied = this.findBookingsByDate(date);
    return this.rooms.length - occupied.length;
  }

  addRates(rates) {
    let result = rates.reduce((sum, rate) => {
      return sum + rate;
    }, 0);
    return `$${result}`;
  }

  findRevenueByDate(date) {
    let occupied = this.findBookingsByDate(date);
    let money = occupied.reduce((roomPrices, booking) => {
      this.rooms.forEach(room => {
        if (booking.roomNumber === room.number) {
          roomPrices.push(room.costPerNight)
        }
      })
      return roomPrices;
    }, []);
    return this.addRates(money);
  }
}
