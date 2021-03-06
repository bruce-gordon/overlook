import {
  closeBox,
  cancelCloseBox,
  bookingConfirmation,
  cancelConfirmation,
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
  deleteBookingButton,
  totalRevenue,
  percentOccupied,
  roomsVacant,
  roomResultsView,
  resultsHeading,
  searchResult,
  backButton
} from './DOM-variables';

import Manager from '../src/Classes/Manager';

export const domMethods = {
  showCustomerDash: function(user) {
    this.goToDash(loginView, customerDash, roomSearchBar);
    welcome.innerText = `Welcome, ${user.name}`;
  },

  showManagerDash: function() {
    this.goToDash(loginView, managerDash, searchCustomers);
  },

  goToDash: function(hide, dash, bar) {
    dash.classList.remove("hide");
    bar.classList.remove("hide");
    hide.classList.add("hide");
    userBar.classList.remove("hide");
    document.documentElement.scrollTop = 0;
  },

  showLoginError: function() {
    password.value = "";
    loginError.classList.remove("hide");
  },

  getManagerData: function(bookingRepo, date) {
    welcome.innerText = `Manager Dashboard`;
    totalRevenue.innerText = bookingRepo.findRevenueByDate(date);
    percentOccupied.innerText = bookingRepo.findOccupiedRoomsPercent(date);
    roomsVacant.innerText = bookingRepo.findNumberOfAvailableRooms(date);
    document.documentElement.scrollTop = 0;
  },

  getCustomerData: function(user, roomsData) {
    customerCharges.innerText = `$${(user.moneySpent).toLocaleString('en')}`;
    customerBookings.innerHTML = '';
    user.bookings.forEach(booking => {
      let room = roomsData.find(roomData => roomData.number === Number(booking.roomNumber));
      let deleteButton = this.checkForManager(user);
      customerBookings.innerHTML +=
        `<article class="search-result">
          <div class="top-row">
            <p tabindex="0" class="column-left">${this.convertDate(booking.date)}</p>
            <p tabindex="0" class="column-middle">${room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}</p>
            <p tabindex="0" class="column-right">Beds:</p>
          </div>
          <div class="bottom-row">
            <p class="column-left">${deleteButton}</p>
            <p tabindex="0" class="column-middle">$${(room.costPerNight).toLocaleString('en')} per night</p>
            <p tabindex="0" class="column-right">${room.numBeds} ${room.bedSize}</p>
            <p class="booking-id hide">${booking.id}</p>
          </div>
        </article>`
    });
    document.documentElement.scrollTop = 0;
  },

  checkForManager: function(user) {
    if (user instanceof Manager) {
      return `<button class="book-room-button delete" type="button" name="delete-booking-button">Delete Booking</button>`;
    } else {
      return '';
    }
  },

  goBack: function(bookingRepo, today) {
    if (customerDash.classList.contains('hide')) {
      this.goToDash(roomResultsView, customerDash, roomSearchBar);
      this.isManager();
    } else {
      this.goToDash(customerDash, managerDash, searchCustomers);
      this.resetManagerDash(bookingRepo, today);
    }
  },

  resetManagerDash: function(bookingRepo, today) {
    customerBookings.innerHTML = '';
    backButton.classList.add('hide');
    roomSearchBar.classList.add('hide');
    searchCustomerInput.value = '';
    this.getManagerData(bookingRepo, today)
  },

  isManager: function() {
    if (!welcome.innerText.includes('Manager Dashboard - Customer')) {
      backButton.classList.add('hide');
    }
  },

  searchRooms: function(bookingRepo, dateInput, type) {
    roomResultsView.classList.remove('hide');
    customerDash.classList.add('hide');
    if (!dateInput) {
      roomResultsView.innerHTML = `<h4 id="results-heading">Please enter a date and then click "Search Rooms" again.</h4>`
    } else {
      let date = dateInput.replaceAll("-", "/");
      let openRooms = bookingRepo.searchAvailableRoomsByDate(date, type);
      this.displayRoomResults(openRooms, date);
    }
    document.documentElement.scrollTop = 0;
  },

  convertDate: function(date) {
    let parts = date.split('/');
    return parts[1] + '/' + parts[2] + '/' + parts[0];
  },

  displayRoomResults: function(openRooms, date) {
    let shownDate = this.convertDate(date);
    if (!openRooms.length) {
      roomResultsView.innerHTML = `<h4 id="results-heading">We sincerely apologize that there are no rooms available that match your search.  Please adjust your date or type of room and search again. </h4>`
    } else {
      roomResultsView.innerHTML = `<h4 id="results-heading">Search Results</h4>`
      openRooms.forEach(room => {
        roomResultsView.insertAdjacentHTML('beforeend',
          `<article class="search-result">
            <div class="top-row">
              <p tabindex="0" class="column-left">${shownDate}</p>
              <p tabindex="0" class="column-middle">${room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}</p>
              <p tabindex="0" class="column-right">Beds:</p>
            </div>
            <div class="bottom-row">
              <p class="column-left"><button class="book-room-button" type="button" name="book-room">Reserve Room</button></p>
              <p tabindex="0" class="column-middle">$${room.costPerNight}</p>
              <p tabindex="0" class="column-right">${room.numBeds} ${room.bedSize}</p>
              <p class="room-num hide">${room.number}</p>
            </div>
          </article>`)
      })
    }
    backButton.classList.remove('hide');
  },

  findUserAccount: function(name, userData, bookingsData, roomsData, manager) {
    manager.selectUser(name, userData, bookingsData, roomsData);
    welcome.innerHTML = `Manager Dashboard - Customer: <span>${manager.name}</span>, ID: <span>${manager.id}</span>`;
    managerDash.classList.add('hide');
    customerDash.classList.remove('hide');
    roomSearchBar.classList.remove("hide");
    searchCustomers.classList.add("hide");
    backButton.classList.remove('hide');
    this.getCustomerData(manager, roomsData);
  },

  showConfirmation: function() {
    if (!customerDash.classList.contains('hide')) {
      cancelConfirmation.classList.remove('hide');
    } else {
      bookingConfirmation.classList.remove('hide');
    }
  },

  hideBox: function() {
    bookingConfirmation.classList.add('hide');
    cancelConfirmation.classList.add('hide');
  }
}
