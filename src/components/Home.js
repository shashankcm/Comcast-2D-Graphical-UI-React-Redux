import React from 'react';

import AddValue from '../containers/AddValue';
import Calculation from '../containers/Calculation';

const Home = () => (
  <div>
    <div
      style={{
        width: "80%",
        float: "left"
      }}
    >
      <Calculation />
    </div>
    <div>
      <AddValue
        label="add"
        action="addrandomnumber"
        heading="Add New Random Numbers"
      />
    </div>
    <div
      style={{
        clear: "both"
      }}
    />
  </div>
);

export default Home;
