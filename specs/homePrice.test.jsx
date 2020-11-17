import { shallow } from 'enzyme';
import Main from '../client/src/main';

describe('Should have property homePrice and it should be a number', () => {
  it('Should have property homePrice', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('#homePriceInput').props().value).toBeGreaterThan(400000);
    expect(wrapper.find('#homePriceInput').props().value).toBeLessThan(3000000);
  });
});
