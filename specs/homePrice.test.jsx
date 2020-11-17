import React from 'react';
import { shallow } from 'enzyme';
import Main from '../client/src/main';

describe('Should have property homePrice and it should be a number', () => {
  it('Should have property homePrice', () => {
    const wrapper = shallow(<Main />);
    expect(parseFloat(wrapper.find('#homePriceInput').props().value.replace(/\D/g, ''))).toBeGreaterThan(400000);
    expect(parseFloat(wrapper.find('#homePriceInput').props().value.replace(/\D/g, ''))).toBeLessThan(3000000);
  });
});
