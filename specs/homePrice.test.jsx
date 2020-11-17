import React from 'react';
import { shallow } from 'enzyme';
import Main from '../client/src/main';

describe('Should have property homePrice and it should be a number', () => {
  it('Should have property homePrice', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('#price').props().homePrice).toBeGreaterThan(400000);
    expect(wrapper.find('#price').props().homePrice).toBeLessThan(3000000);
  });
});
