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
  return getUsers()
  .then((data) => {
    userData = data.users;
    console.log(userData);
  })
  .catch(error => console.log(error));
}

const updateRoomsData = () => {
  return getRooms()
  .then((data) => {
    roomsData = data.rooms;
    console.log(roomsData);
  })
  .catch(error => console.log(error));
}

const updateBookingsData = () => {
  return getBookings()
  .then((data) => {
    bookingsData = data.bookings;
    console.log("DOM BOOKING DATA", bookingsData)
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

roomResultsView.addEventListener("click", () => {
  makeBooking(event);
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
const userOrManager = (date, roomNumber) => {
  if (user) {
    return user;
  } else {
    return manager;
  }
}

const formatPostingDate = (event) => {
  let dateClick = event.target.closest('article').children[0].children[0].innerText;
  let parts = dateClick.split('/');
  return parts[2] + '/' + parts[0] + '/' + parts[1];
}

const makeBooking = (event) => {
  if (event.target.classList.contains('book-room-button')) {
    let date = formatPostingDate(event);
    let roomNumber = Number(event.target.closest('article').children[1].children[3].innerText);
    let bookingDetails = userOrManager().bookRoom(date, roomNumber);
    postBooking(bookingDetails)
    .then(() => updateBookingsData()
      .then(() => user.updateUserBookings(bookingsData))
      .then(() => domMethods.getCustomerData(user, roomsData)))
    .catch((error) => console.log(error));
  }
}
