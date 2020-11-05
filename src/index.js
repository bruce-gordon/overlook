// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getUsers, getRooms, getBookings } from './fetch-requests'

let userData;
let roomsData;
let bookingsData;

const updateUserData = () => {
  getUsers()
  .then((data) => {
    userData = data.users;
    console.log(userData);
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

updateBookingsData()
