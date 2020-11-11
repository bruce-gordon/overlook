# Overlook (Hotel Booking Project)

In this project I created an app for a hotel that allows both customers and managers to log in, view a dashboard with their information, view available hotel rooms, and book hotel rooms.  The manager can also delete reservations.  All of this communicates with an api to get, post, and delete relevant data.

This project also focuses on accessibility and responsive design elements.

## Project Manager

[Will Mitchell](https://github.com/wvmitchell)

## Developers
- [Bruce Gordon](https://github.com/bruce-gordon)

## Setup

After cloning down the repo, run `npm start` in your terminal. Go to `http://localhost:8080/` to view the app.

## Goals & Objectives
- Use OOP to drive the design of the application and the code
- Work with an API to send and receive data
- Solidify the code review process
- Create a robust test suite that thoroughly tests all functionality of a client-side application

## Functionality
Login view - Fully tabable and buttons reflect hover state.
![Screen Shot 2020-11-10 at 9 07 38 PM](https://user-images.githubusercontent.com/68293135/98764513-33be2580-2399-11eb-997f-30cf381445f7.png)

Customer Dashboard - Calculates and displays the user's total bookings and total hotel charges.  The user bar, below the header, displays the user's name and allows the user to search for open hotel rooms based on room type and date. Fully tabable and buttons reflect hover state.  
![Screen Shot 2020-11-10 at 9 07 02 PM](https://user-images.githubusercontent.com/68293135/98764582-59e3c580-2399-11eb-8fd2-7dee3a926d74.png)

After searching for a room, the customer can book a room.
![](https://media.giphy.com/media/x32y5zY5ZUyucuIj3J/giphy.gif)

Manager Dashboard - Calculates and displays the total hotel revenue for today, the percent of rooms booked today, and the number of rooms available today.  The user bar indicates that this is the manager dashboard and allows the manager to search for a customer by name.
![Screen Shot 2020-11-10 at 9 05 22 PM](https://user-images.githubusercontent.com/68293135/98764700-97485300-2399-11eb-84a6-b83324fc59ae.png)

After searching for a customer, the manager can see that customer's dashboard and all of the customer dash information.  The manager can delete a reservation for that user or search for open rooms.
![Screen Shot 2020-11-10 at 9 05 46 PM](https://user-images.githubusercontent.com/68293135/98764719-9dd6ca80-2399-11eb-9735-1a49667521d1.png)

After searching for an open room, the manager can book a room on behalf of the customer.
![Screen Shot 2020-11-10 at 9 06 19 PM](https://user-images.githubusercontent.com/68293135/98764731-a4654200-2399-11eb-8065-0b05e244b086.png)
