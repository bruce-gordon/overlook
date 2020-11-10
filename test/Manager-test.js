import { expect } from 'chai';
import User from '../src/classes/User';
import Manager from '../src/classes/Manager'
import { bookingsData, roomsData, userData } from './test-data';

describe('Manager', () => {
  let manager;
  let users;
  let bookings;
  let rooms;

  beforeEach(() => {
    manager = new Manager({"id": null, "name": null}, bookingsData, roomsData);
  })
    users = userData;
    bookings = bookingsData;
    rooms = roomsData;

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  });

  it('should be an instance of Manager', () => {
    expect(manager).to.be.an.instanceof(Manager);
  })

  it('should start without a user id', () => {
    expect(manager.id).to.equal(null);
  })

  it('should start without a name', () => {
    expect(manager.name).to.equal(null);
  })

  it('should be able to act as a user', () => {
    expect(manager.name).to.equal(null);
    manager.selectUser("Rocio Schuster", users, bookings, rooms);
    expect(manager.name).to.equal("Rocio Schuster");
    expect(manager.id).to.equal(2);
    expect(manager.bookings).to.deep.equal( [{
      id: '5fwrgu4i7k55hl6t7',
      userID: 2,
      date: '2020/02/16',
      roomNumber: 7,
      roomServiceCharges: []
    }]);
  })

  it('should be able to delete a user booking', () => {
    expect(manager.deleteBookedRoom(5398475029)).to.deep.equal({ "id": 5398475029 })
  })

  it('should be able to see total money spent by a user', () => {
    manager.selectUser("Rocio Schuster", users, bookings, rooms);
    expect(manager.moneySpent).to.equal(231.46);
  })
});
