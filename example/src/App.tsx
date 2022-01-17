import React from 'react'

import { Ripple } from 'react-ripple-effect';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1>React Ripple effect demo</h1>

      <ul>
        <li>Zero dependency</li>
        <li>Minimal size</li>
        <li>Easy to use</li>
        <li>Based on react hooks</li>
      </ul>

      <h2>Basic usage:</h2>

      <Ripple>
        <button className="btn">Basic usage</button>
      </Ripple>

      <br />

      <h2>Custom color:</h2>

      <div className="flex sb">
        <Ripple color="#48c78e">
          <button className="btn green">Green ripple</button>
        </Ripple>

        <Ripple color="#cc0f35">
          <button className="btn red">Red ripple</button>
        </Ripple>

        <Ripple color="#485fc7">
          <button className="btn blue">Blue ripple</button>
        </Ripple>
      </div>

      <h2>Custom Animation duration:</h2>

      <div className="flex sb">
        <Ripple animationDuration={2000}>
          <button className="btn green">slow Animation(2000ms)</button>
        </Ripple>

        <Ripple animationDuration={300}>
          <button className="btn red">Fast Animation(300ms)</button>
        </Ripple>

        <Ripple>
          <button className="btn blue">default Animation(550ms)</button>
        </Ripple>
      </div>

      <h2>Rounded ripples</h2>
      <Ripple borderRadius={"5px"}>
        <button className="btn green">Centered ripple</button>
      </Ripple>

      <h2>Centered ripples</h2>
      <Ripple centeredRipple borderRadius={"50%"}>
        <button className="btn red round">0</button>
      </Ripple>
    </div>
  );
}

export default App
