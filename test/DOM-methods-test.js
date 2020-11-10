import chai, { expect } from 'chai';
import spies from 'chai-spies';
chai.use(spies);
import domMethods from '../src/DOM-methods';
import { loginError } from '../src/DOM-variables';

describe('showManagerDash', () => {

  before(function() {
    global.domMethods = {}
    chai.spy.on(domMethods, ['split'], () => {})
  })


  it('should convert the date', () => {
    domMethods.conertDate();

    expect(date.split()).to.have.been.called(1);
  })
})
