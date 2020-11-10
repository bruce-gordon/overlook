import { expect } from 'chai';
import User from '../src/classes/User';
import { bookingsData, roomsData } from './test-data';

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User({"id": 1, "name": "Leatha Ullrich"}, bookingsData, roomsData);
  })

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

  it('should store a list of user bookings', () => {
    expect(user.bookings.length).to.equal(3);
    expect(user.bookings[0]).to.deep.equal({"id":"5fwrgu4i7k55hl6t6","userID":1,"date":"2020/01/10","roomNumber":8,"roomServiceCharges":[]})
  })

  it('should store the total amount owed by the user', () => {
    expect(user.moneySpent).to.equal(1216.02);
  })

  it('should return data needed to book a hotel room', () => {
    expect(user.bookRoom("2020/11/05", 2)).to.deep.equal({
      "userID": 1,
      "date": "2020/11/05",
      "roomNumber": 2
    });
  })
});
