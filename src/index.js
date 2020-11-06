// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
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
