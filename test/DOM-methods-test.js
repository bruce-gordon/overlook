import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
// import domMethods from '../src/DOM-methods';

describe('domMethods', () => {

  before(function() {
    global.domMethods = {}
    chai.spy.on(domMethods, ['split'], () => {})
  })


  it('should convert the date', () => {
    // domMethods.conertDate();
    // expect(date.split()).to.have.been.called(1);
  })
})
