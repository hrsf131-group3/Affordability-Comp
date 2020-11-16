import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Main() {
  const [homePrice, setHomePrice] = useState(1000000);

  useEffect(() => {
    if (homePrice) {
      axios
        .get('/db')
        .then((res) => { setHomePrice(res.data.homePrice); })
        .catch((err) => { console.log(err); });
    }
  }, []);
  return (
    <div>
      <div id="sliders">
        <div className="sliders">
          <label>Home Price</label>
          <input value={homePrice} />
        </div>
      </div>
      <div id="svg">svg</div>
      <div id="data">data</div>
    </div>
  );
}
