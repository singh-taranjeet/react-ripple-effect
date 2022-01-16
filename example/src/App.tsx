import React from 'react'

import { Ripple } from 'react-ripple-effect';

const App = () => {
  return (
    <div className="ripple">
      <Ripple centeredRipple={false}>
        <button className="button">Example Ripple Effect</button>
      </Ripple>
    </div>
  );
}

export default App
