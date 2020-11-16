import React from 'react';
import { mount } from 'enzyme';
import { controller } from '../controller/mongo';
import MortgageCalc from '../client/src/mortgageCalc';
import Sliders from '../client/src/sliders';

// function Test() {
//   return (
//     <div>
//       <MortgageCalc />
//     </div>
//   );
// }

describe.only('test for <MortgageCalc/>', () => {
  let price, wrapper, priceSpy
  beforeEach(() => {
    priceSpy = jest.spy();
    wrapper = shallow(<Sliders homePrice={1000000} downPayment={200000} interestRate={0.0292} />);
  });
  it('assert checked', () => {
    expect(wrapper.find('#checked')).toBeChecked();
    expect(wrapper.find('#not')).not.toBeChecked();
  });
});
