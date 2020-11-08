import './css/base.scss';

import User from '../src/Classes/User';
import Manager from '../src/Classes/Manager';
import BookingRepo from '../src/Classes/Booking-Repo';

import { getUsers, getRooms, getBookings, postBooking } from './fetch-requests';
import { domMethods } from './DOM-methods';
import {
  homeButton,
  userBar,
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
  searchCustomers,
  searchCustomerInput,
  searchCustomerButton,
  totalRevenue,
  percentOccupied,
  roomsVacant,
  roomResultsView,
  resultsHeading,
  searchResult,
  backButton
} from './DOM-variables';

let userData;
let roomsData;
let bookingsData;
let user;
let manager;

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

loginButton.addEventListener("click", () => {
  login(userName.value, password.value);
})

const login = (name, pWord) => {
  checkManagerPassword(name, pWord);
  let userId = parseInt(name.slice(8));
  let allIds = userData.map(user => {
    return user.id;
  });
  checkCustomerPassword(userId, allIds, pWord);
}

const checkManagerPassword = (name, pWord) => {
  if (name === 'manager') {
    if (pWord === 'overlook2020') {
      showManagerDash();
    } else {
      showLoginError();
    }
  }
}

const checkCustomerPassword = (userId, allIds, pWord) => {
  if (allIds.includes(userId) && pWord === 'overlook2020') {
    showCustomerDash(userId);
  } else {
    showLoginError();
  }
}

const showCustomerDash = (userId) => {
  user = new User(userData[userId - 1], bookingsData, roomsData);
  loginView.classList.add("hide");
  customerDash.classList.remove("hide");
  userBar.classList.remove("hide");
  roomSearchBar.classList.remove("hide");
}

const showManagerDash = () => {
  manager = new Manager({"id": null, "name": null}, bookingsData, roomsData);
  loginView.classList.add("hide");
  managerDash.classList.remove("hide");
  userBar.classList.remove("hide");
  searchCustomers.classList.remove("hide");
}

const showLoginError = () => {
  password.value ="";
  loginError.classList.remove("hide");
}

const makeBooking = (date, roomNumber) => {
  let bookingDetails = user.bookRoom(date, roomNumber);
  postBooking(bookingDetails)
  .then((data) => console.log(data));
}
