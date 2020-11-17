import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from '../client/src/main';

describe('Should have property homePrice and it should be a number', () => {
  it('Should have property homePrice', () => {
    const wrapper = shallow(<Main />);
    wrapper.update();
    expect(wrapper.find('#paymentsData').props().value).toBeGreaterThan(1300);
    expect(wrapper.find('#paymentsData').props().value).toBeLessThan(10000);
  });
  it('should be an accurate payment on given input', () => {
    const wrapper = mount(<Main />);
    wrapper.find('#homePriceInput').simulate('change', { target: { value: 2000000 } });
    expect(wrapper.find('#paymentsData').props().value).toBe(7835);
    wrapper.find('#homePriceInput').simulate('change', { target: { value: 1556831 } });
    expect(wrapper.find('#paymentsData').props().value).toBe(6116);
  });
});
