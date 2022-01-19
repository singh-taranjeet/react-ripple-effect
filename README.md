# @minimal_ui/react-ripple

> create react ripple in any element.
> Typescript support
> Css animation
> Minimal size bundle
> Based on efficient react-hooks
> 0 dependencies

[![NPM](https://img.shields.io/npm/v/@minimal_ui/react-ripple.svg)](https://www.npmjs.com/package/@minimal_ui/react-ripple) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Demo
> [DEMO](https://codesandbox.io/s/keen-pine-urlqs?file=/src/App.js)

## Install

```bash
npm install --save @minimal_ui/react-ripple
```

## Basic Usage

```tsx
import React from 'react'

import { Ripple, dispatchRipple } from 'react-ripple-effect';

const App = () => {

  const ref = React.createRef<HTMLDivElement>();

  return (
    <div className="App">
      
      <h2>Basic usage:</h2>

      <Ripple>
        <button className="btn">Basic usage</button>
      </Ripple>
    </div>
  );
}

```

## Custom Color

```tsx

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

```

## Custom Animation duration

```tsx

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

```

## Rounded ripple

```tsx

      <Ripple borderRadius={"5px"}>
        <button className="btn green">Centered ripple</button>
      </Ripple>
```

## Centered Ripple

```tsx

      <Ripple centeredRipple borderRadius={"50%"}>
        <button className="btn red round">0</button>
      </Ripple>

      
```

## Ripple on custom event
```tsx

      import { Ripple, dispatchRipple } from 'react-ripple-effect';

      return (
        <>
          <Ripple forwardRef={ref}>
            <button className="red btn">Click button for ripple</button>
          </Ripple>

          <button className="btn ml-20" onClick={() => dispatchRipple(ref)}>Press to ripple on red button</button>
        </>
      );
```

## License

MIT © [singh-taranjeet](https://github.com/singh-taranjeet)
