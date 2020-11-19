/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import Main from '../client/src/main';
// import Price from '../client/src/controllers/price';
// could input Input styled-comp to refernce in test

describe('Should have property homePrice and it should be a number', () => {
  it('Should have property homePrice', () => {
    const wrapper = shallow(<Main />);
    wrapper.update();
    expect(parseFloat(wrapper.find('#paymentsData').props().value.replace(/\D/g, ''))).toBeGreaterThan(1300);
    expect(parseFloat(wrapper.find('#paymentsData').props().value.replace(/\D/g, ''))).toBeLessThan(10000);
  });
  it('should be an accurate payment on given input', () => {
    const wrapper = mount(<Main />);
    // const comp = shallow(<Price />);
    wrapper.find('input').simulate('change', { target: { value: '$2,000,000' } });
    expect(parseFloat(wrapper.find('#paymentsData').props().value.replace(/\D/g, ''))).toBe(7835);
    wrapper.find('#price').simulate('change', { target: { value: '$1,556,831' } });
    expect(parseFloat(wrapper.find('#paymentsData').props().value.replace(/\D/g, ''))).toBe(6116);
  });
});
