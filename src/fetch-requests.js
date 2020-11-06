

export const getUsers = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
    .then((resp) => resp.json());
}

export const getRooms = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
    .then((resp) => resp.json());
}

export const getBookings = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
    .then((resp) => resp.json());
}

export const postBooking = (bookingDetails) => {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
    .then((resp) => resp.json());
}
