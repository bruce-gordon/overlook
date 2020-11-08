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
  }
}
