import './css/base.scss';
import { getUsers, getRooms, getBookings } from './fetch-requests'
import User from '../src/Classes/User';
import Manager from '../src/Classes/Manager';
import BookingRepo from '../src/Classes/Booking-Repo'

let userData;
let roomsData;
let bookingsData;
let user;

const updateUserData = () => {
  getUsers()
  .then((data) => {
    userData = data.users;
  });
}

const updateRoomsData = () => {
  getRooms()
  .then((data) => {
    roomsData = data.rooms;
    console.log(roomsData);
  })
}

const updateBookingsData = () => {
  getBookings()
  .then((data) => {
    bookingsData = data.bookings;
    console.log(bookingsData)
  })
}

const makeBooking = (date, roomNumber) => {
  let bookingDetails = user.bookRoom(date, roomNumber);
  postBooking(bookingDetails)
  .then((data) => console.log(data));
}
