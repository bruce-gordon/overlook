import './css/base.scss';

import User from '../src/Classes/User';
import Manager from '../src/Classes/Manager';
import BookingRepo from '../src/Classes/Booking-Repo';

import { getUsers, getRooms, getBookings, postBooking } from './fetch-requests';
import { domMethods } from './DOM-methods';
import {
  homeButton,
  roomSearchBar,
  roomTypeInput,
  roomDateInput,
  searchRoomsButton,
  loginView,
  userName,
  password,
  loginButton,
  loginError,
  customerDash,
  customerCharges,
  customerBookings,
  managerDash,
  userSearch,
  searchCustomerInput,
  searchCustomerButton,
  totalRevenue,
  percentOccupied,
  roomsVacant,
  resultsHeading,
  searchResult,
  backButton
} from './DOM-variables';

let userData;
let roomsData;
let bookingsData;
let user;

loginButton.addEventListener("click", () => {
  login(userName.value, password.value);
})

const login = (userName, password) => {
  let userID = parseInt(userName.slice(8));
  let allIds = userData.map(user => {
    return user.id;
  })
  if (allIds.includes(userID) && password === 'overlook2020') {
    user = new User(userData[userID - 1], bookingsData, roomsData);
  }

}

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

updateUserData();
updateRoomsData();
updateBookingsData();

const makeBooking = (date, roomNumber) => {
  let bookingDetails = user.bookRoom(date, roomNumber);
  postBooking(bookingDetails)
  .then((data) => console.log(data));
}
