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

export const domMethods = {
  showCustomerDash: function() {
    loginView.classList.add("hide");
    customerDash.classList.remove("hide");
    userBar.classList.remove("hide");
    roomSearchBar.classList.remove("hide");
  },

  showManagerDash: function() {
    loginView.classList.add("hide");
    managerDash.classList.remove("hide");
    userBar.classList.remove("hide");
    searchCustomers.classList.remove("hide");
  },

  showLoginError: function() {
    password.value ="";
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
    welcome.innerText = `Welcome, ${user.name}`;
    customerCharges.innerText = `$${(user.moneySpent).toLocaleString('en')}`;
    user.bookings.forEach(booking => {
      let room = roomsData.find(roomData => roomData.number === booking.roomNumber);
    customerBookings.innerHTML +=
      `<article class="search-result">
        <div class="top-row">
          <p class="column-left">${booking.date}</p>
          <p class="column-middle">${room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}</p>
          <p class="column-right">Beds:</p>
        </div>
        <div class="bottom-row">
          <p class="column-left"></p>
          <p class="column-middle">$${(room.costPerNight).toLocaleString('en')} per night</p>
          <p class="column-right">${room.numBeds} ${room.bedSize}</p>
        </div>
      </article>`
    });
    document.documentElement.scrollTop = 0;
  },

  searchRooms: function(bookingRepo, dateInput, type) {
    roomResultsView.classList.remove('hide');
    customerDash.classList.add('hide');
    if (!dateInput) {
      roomResultsView.innerHTML = `<h4 id="results-heading">Please enter a date and then click "Search Rooms" again.</h4>`
    } else {
      let date = dateInput.replaceAll("-", "/");
      let openRooms = bookingRepo.searchAvailableRoomsByDate(date, type);
      console.log("OPEN", openRooms);
      this.displayRoomResults(openRooms, date);
    }
  },

  displayRoomResults: function(openRooms, date) {
    roomResultsView.innerHTML = `<h4 id="results-heading">Search Results</h4>`
    openRooms.forEach(room => {
      roomResultsView.insertAdjacentHTML('beforeend',
    `<article class="search-result">
      <div class="top-row">
        <p class="column-left">${date}</p>
        <p class="column-middle">${room.roomType.charAt(0).toUpperCase() + room.roomType.slice(1)}</p>
        <p class="column-right">Beds:</p>
      </div>
      <div class="bottom-row">
        <p class="column-left"><button class="book-room-button" type="button" name="book-room">Reserve Room</button></p>
        <p class="column-middle">$${room.costPerNight}</p>
        <p class="column-right">${room.numBeds} ${room.bedSize}</p>
      </div>
    </article>`)
    })
  }


}
