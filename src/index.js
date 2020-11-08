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
  totalRevenue,
  percentOccupied,
  roomsVacant,
  roomResultsView,
  resultsHeading,
  searchResult,
  backButton
} from './DOM-variables';

export let userData;
export let roomsData;
export let bookingsData;
export let user;
export let manager;

// ----------Get Data----------
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

updateUserData();
updateRoomsData();
updateBookingsData();

// ----------Event Listeners----------
loginButton.addEventListener("click", () => {
  login(userName.value, password.value);
})

// ----------Functions----------
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
      manager = new Manager({"id": null, "name": null}, bookingsData, roomsData);
      domMethods.showManagerDash();
    } else {
      domMethods.showLoginError();
    }
  }
}

const checkCustomerPassword = (userId, allIds, pWord) => {
  if (allIds.includes(userId) && pWord === 'overlook2020') {
    let currentUser = userData.find(person => person.id === userId);
    user = new User(currentUser, bookingsData, roomsData);
    domMethods.showCustomerDash(userId);
    domMethods.getCustomerData(user, roomsData);
  } else {
    domMethods.showLoginError();
  }
}

// const getCustomerData = () => {
//   welcome.innerText = `Welcome, ${user.name}`;
//   customerCharges.innerText = `$${(user.moneySpent).toLocaleString('en')}`;
//   user.bookings.forEach(booking => {
//     let room = roomsData.find(roomData => roomData.number === booking.roomNumber);
//   customerBookings.innerHTML +=
//     `<article class="search-result">
//       <div class="top-row">
//         <p class="column-left">${booking.date}</p>
//         <p class="column-middle">${room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}</p>
//         <p class="column-right">Beds:</p>
//       </div>
//       <div class="bottom-row">
//         <p class="column-left"></p>
//         <p class="column-middle">$${(room.costPerNight).toLocaleString('en')} per night</p>
//         <p class="column-right">${room.numBeds} ${room.bedSize}</p>
//       </div>
//     </article>`
//   });
// }


// ----------Post Data----------
const makeBooking = (date, roomNumber) => {
  let bookingDetails = user.bookRoom(date, roomNumber);
  postBooking(bookingDetails)
  .then((data) => console.log(data));
}
