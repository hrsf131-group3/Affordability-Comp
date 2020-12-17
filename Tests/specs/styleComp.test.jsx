import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
// import renderer from 'react-test-renderer';
import Main from '../client/src/main';
import Data from '../client/src/data';

describe('test for parent styled components and nested styled components', () => {
  it('should detect parent style', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('TextRef')).toHaveStyleRule('font-size', '16px');
  });
  it('should detect inherited style', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.find('#priceSection').find('inputRef')).toHaveStyleRule(
      'font-size',
      '16px',
    );
  });
  it('should detect style overRide', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.find('TitleRef')).toHaveStyleRule('font-size', '20px');
  });
  it('<Data /> should render the correct elements attributes when passed in props', () => {
    const wrapper = mount(<Data color="#c2d500" text="Hello World" value="$1,234" />);
    expect(wrapper.find('#colorRef').html().includes('#c2d500')).toBe(true);
    expect(wrapper.find('#descriptRef').text()).toEqual('Hello World');
    expect(wrapper.find('#amountRef').text()).toEqual('$1,234');
  });
});
