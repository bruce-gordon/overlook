import './css/base.scss';

import User from '../src/Classes/User';
import Manager from '../src/Classes/Manager';
import BookingRepo from '../src/Classes/Booking-Repo';

import { getUsers, getRooms, getBookings, postBooking } from './fetch-requests';
import { domMethods } from './DOM-methods';
import {
  homeButton,
  userBar,
  welcome,
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
  deleteBooking,
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
let bookingRepo;

const findToday = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  return today;
}

let today = findToday();

// ----------Get Data----------
const updateAllData = () => {
  updateUserData();
  updateRoomsData();
  updateBookingsData();
}

const updateUserData = () => {
  getUsers()
  .then((data) => {
    userData = data.users;
    console.log(userData);
  })
  .catch(error => console.log(error));
}

const updateRoomsData = () => {
  getRooms()
  .then((data) => {
    roomsData = data.rooms;
    console.log(roomsData);
  })
  .catch(error => console.log(error));
}

const updateBookingsData = () => {
  getBookings()
  .then((data) => {
    bookingsData = data.bookings;
    console.log(bookingsData)
  })
  .catch(error => console.log(error));
}

updateAllData();


// ----------Event Listeners----------
loginButton.addEventListener("click", () => {
  login(userName.value, password.value);
})

searchRoomsButton.addEventListener("click", () => {
  domMethods.searchRooms(bookingRepo, roomDateInput.value, roomTypeInput.value);
})

searchCustomerButton.addEventListener("click", () => {
  domMethods.findUserAccount(searchCustomerInput.value, userData, bookingsData, roomsData, manager);
})

backButton.addEventListener("click", () => {
  domMethods.goBack();
})

// ----------Functions----------
const login = (name, pWord) => {
  bookingRepo = new BookingRepo(bookingsData, roomsData);
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
      manager = new Manager({"id": null, "name": null}, bookingsData, roomsData);
      domMethods.showManagerDash();
      domMethods.getManagerData(bookingRepo, "2020/01/24");
    } else {
      domMethods.showLoginError();
    }
  }
}

const checkCustomerPassword = (userId, allIds, pWord) => {
  if (allIds.includes(userId) && pWord === 'overlook2020') {
    let currentUser = userData.find(person => person.id === userId);
    user = new User(currentUser, bookingsData, roomsData);
    domMethods.showCustomerDash(user);
    domMethods.getCustomerData(user, roomsData);
  } else {
    domMethods.showLoginError();
  }
}

// ----------Post Data----------
const makeBooking = (date, roomNumber) => {
  let bookingDetails = user.bookRoom(date, roomNumber);
  postBooking(bookingDetails)
  .then((data) => console.log(data));
}
