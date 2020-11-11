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
    let percent;
    if (this.findBookingsByDate(date).length > this.rooms.length) {
      percent = 1;
    } else {
      percent = (this.findBookingsByDate(date).length / this.rooms.length);
    }
    return `${(percent * 100).toFixed(0)}%`
  }

  findNumberOfAvailableRooms(date) {
    let occupied;
    if (this.findBookingsByDate(date).length > this.rooms.length) {
      occupied = this.rooms.length;
    } else {
      occupied = this.findBookingsByDate(date).length
    }
    return this.rooms.length - occupied;
  }

  addRates(rates) {
    let result = rates.reduce((sum, rate) => {
      return sum + rate;
    }, 0);
    return `$${(result).toLocaleString('en')}`;
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

  filterRoomsByType(openRooms, type) {
    if (type) {
      return openRooms.filter(room => room.roomType === type);
    } else {
      return openRooms;
    }
  }

  searchAvailableRoomsByDate(date, type) {
    let occupied = this.findBookingsByDate(date);
    let takenRooms = occupied.map(booking => booking.roomNumber);
    let openRooms = this.rooms.reduce((available, room) => {
      if (!takenRooms.includes(room.number)) {
        available.push(room);
      }
      return available;
    },[]);
    return this.filterRoomsByType(openRooms, type);
  }
}
