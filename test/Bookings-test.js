import { expect } from 'chai';
import User from '../src/classes/User';
import Manager from '../src/classes/Manager'
import BookingRepo from '../src/classes/Booking-Repo';
import { bookingsData, roomsData, userData } from './test-data';

describe('BookingRepo', () => {
  let manager;
  let users;
  let bookings;
  let rooms;
  let bookingRepo;

  beforeEach(() => {
    users = userData;
    bookings = bookingsData;
    rooms = roomsData;
    bookingRepo = new BookingRepo(bookings, rooms)
  })

  it('should be a function', () => {
    expect(BookingRepo).to.be.a('function');
  })

  it('should store all of the hotel bookings', () => {
    expect(bookingRepo.allBookings).to.deep.equal([
      {"id":"5fwrgu4i7k55hl6sz","userID":1,"date":"2020/04/22","roomNumber":2,"roomServiceCharges":[]}, {"id":"5fwrgu4i7k55hl6t5","userID":4,"date":"2020/01/24","roomNumber":9,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t6","userID":1,"date":"2020/01/10","roomNumber":8,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t7","userID":2,"date":"2020/02/16","roomNumber":7,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t8","userID":1,"date":"2020/02/05","roomNumber":2,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6t9","userID":3,"date":"2020/02/14","roomNumber":6,"roomServiceCharges":[]},
      {"id":"5fwrgu4i7k55hl6rl","userID":6,"date":"2020/02/14","roomNumber":3,"roomServiceCharges":[]}
    ]);
  })

  it('should be able to store data for all hotel rooms', () => {
    expect(bookingRepo.rooms).to.deep.equal([
      {"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},
      {"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},
      {"number":3,"roomType":"single room","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":491.14},
      {"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44},
      {"number":5,"roomType":"single room","bidet":true,"bedSize":"queen","numBeds":2,"costPerNight":340.17},
      {"number":6,"roomType":"junior suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":397.02},
      {"number":7,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":2,"costPerNight":231.46},
      {"number":8,"roomType":"junior suite","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":261.26},
      {"number":9,"roomType":"single room","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":200.39}
    ]);
  });

  it('should find all bookings on a given date', () => {
    expect(bookingRepo.findBookingsByDate("2020/02/14")).to.deep.equal([{
      "id":"5fwrgu4i7k55hl6t9",
      "userID":3,
      "date":"2020/02/14",
      "roomNumber":6,
      "roomServiceCharges":[]
    },
    {
      "id":"5fwrgu4i7k55hl6rl",
      "userID":6,
      "date":"2020/02/14",
      "roomNumber":3,
      "roomServiceCharges":[]
    }])
  })

  it('should find the total revenue on a given day', () => {
      expect(bookingRepo.findRevenueByDate("2020/02/14")).to.equal("$888.16")
  })

  it('should find percentage of booked rooms on a given date', () => {
    expect(bookingRepo.findOccupiedRoomsPercent("2020/02/14")).to.equal("22%")
  })

  it('should find the total number of available rooms', () => {
    expect(bookingRepo.findNumberOfAvailableRooms("2020/02/14")).to.equal(7)
  })

  it('should search for a list of available rooms on a given date', () => {
    expect(bookingRepo.searchAvailableRoomsByDate("2020/02/14")).to.deep.equal([
      {"number":1,"roomType":"residential suite","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":358.4},
      {"number":2,"roomType":"suite","bidet":false,"bedSize":"full","numBeds":2,"costPerNight":477.38},
      {"number":4,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":1,"costPerNight":429.44},
      {"number":5,"roomType":"single room","bidet":true,"bedSize":"queen","numBeds":2,"costPerNight":340.17},
      {"number":7,"roomType":"single room","bidet":false,"bedSize":"queen","numBeds":2,"costPerNight":231.46},
      {"number":8,"roomType":"junior suite","bidet":false,"bedSize":"king","numBeds":1,"costPerNight":261.26},
      {"number":9,"roomType":"single room","bidet":true,"bedSize":"queen","numBeds":1,"costPerNight":200.39}
    ]);
    expect(bookingRepo.searchAvailableRoomsByDate("2020/02/14").length).to.equal(7);
  })
});
