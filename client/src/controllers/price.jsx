/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Slider from '../styles/slider';
import Input from '../styles/input';
import Controls from '../styles/controls';
import InputContainer from '../styles/inputContainer';

export default function Price(props) {
  // const [max, setMax] = useState(props.homePrice * 1.3);
  // useEffect(() => {
  //   setMax(props.homePrice * 1.3);
  // }, [props.homePrice * 1.3]);
  function handleChange(e) {
    // eslint-disable-next-line react/prop-types
    props.onChange(e.target.value);
  }

  return (
    <Controls>
      <InputContainer>
        <div>Home Price</div>
        <Input
          id="priceInput"
          style={{ width: '94px' }}
          type="text"
          onChange={handleChange}
          maxLength={10}
          value={props.price}
        />
      </InputContainer>
      <Slider
        step={10}
        min={0}
        max={3000000}
        onChange={handleChange}
        value={props.homePrice}
      />
    </Controls>
  );
}
