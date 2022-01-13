# @minimal_ui/react-ripple

> create react ripple in any element. Very minimal library with 0 dependency and based on react hooks.

[![NPM](https://img.shields.io/npm/v/@minimal_ui/react-ripple.svg)](https://www.npmjs.com/package/@minimal_ui/react-ripple) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Demo
> [DEMO](https://codesandbox.io/s/keen-pine-urlqs?file=/src/App.js)

## Install

```bash
npm install --save @minimal_ui/react-ripple
```

## Usage

```tsx
import "./styles.scss";
import { Ripple } from "@minimal_ui/react-ripple";

export default function App() {
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
    </div>
  );
}

```

## License

MIT © [singh-taranjeet](https://github.com/singh-taranjeet)
