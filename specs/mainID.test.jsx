import { shallow } from 'enzyme';
import Main from '../client/src/main';

describe('test render for <Main />', () => {
  it('assert', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('#sliders')).not.toBeUndefined();
    expect(wrapper.find('#svg')).not.toBeUndefined();
    expect(wrapper.find('#data')).not.toBeUndefined();
  });
});
