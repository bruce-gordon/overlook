export const getUsers = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users/")
    .then((resp) => resp.json());
}

export const getRooms = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms/")
    .then((resp) => resp.json());
}

export const getBookings = () => {
  return fetch(
    "https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings/")
    .then((resp) => resp.json());
}
