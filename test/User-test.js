import { expect } from 'chai';
import User from '../src/classes/User';
import { bookingsData, roomsData } from './test-data';

describe.only('User', () => {
  let user;

  beforeEach(() => {
    user = new User({"id": 1, "name": "Leatha Ullrich"}, bookingsData, roomsData);
  })
  console.log("TEST", bookingsData[0]);

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  })

  it('should store an id', () => {
    expect(user.id).to.equal(1);
  })

  it('should store a name', () => {
    expect(user.name).to.equal("Leatha Ullrich");
  })

  it('should store a username', () => {
    expect(user.username).to.equal("customer1");
  })

  it('should store a password', () => {
    expect(user.password).to.equal("overlook2020");
  })

  it('should store a list of user bookings', () => {
    expect(user.bookings.length).to.equal(3);
    expect(user.bookings[0]).to.deep.equal({"id":"5fwrgu4i7k55hl6sz","userID":1,"date":"2020/04/22","roomNumber":2,"roomServiceCharges":[]})
  })

  it('should store the total amount owed by the user', () => {
    expect(user.moneySpent).to.equal(1216.02);
  })
});
