# Easy Ease
A tiny easing package (< 0.5 KB) with no dependencies.

There are no options for different types of easing. What you get is a nice ease-in-out 
similar to the default animation for `transition` in CSS.

If you'd prefer to choose from the full suite of 
Robert Penner equations, try [tween.js](https://www.npmjs.com/package/@tweenjs/tween.js)
or [d3-ease](https://www.npmjs.com/package/d3-ease).

# Usage
`npm install easy-ease`

## Example

To scroll the window to the top of the page, you would do this:

```js
import ease from 'easy-ease';

ease({
  startValue: window.scrollY,
  endValue: 0,
  durationMs: 500,
  onStep: value => {
    window.scroll(0, value);
  },
  onComplete: () => {
    // do something when at the top of the page
  }
});
```

Have a play on codepen https://codepen.io/davidgilbertson/pen/GyrZNz

## API
The `ease` function takes a single parameter, an object. The properties of that object are:

| Prop | Type | Description | Default |
| ---- | ---- | ---- | ---- |
| `startValue` | Number | The value at which to start | `0` |
| `endValue` | Number | The value at which to end | `1` |
| `durationMs` | Number | The amount of time the transition should take | `200` |
| `onStep` | Function | This will be called on each step of the transition. That's once for each 'animation frame' - roughly every 16 milliseconds. The current value is passed as the only argument. The last time it is called the value is guaranteed to be `endValue`. | No default |
| `onComplete` | Function | Called when the transition is complete. Will be called after the final call to `onStep`. No argument is passed to this function. | noop |


# Requirements
This package assumes that `window.requestAnimationFrame` exists.

If you want to support older browsers you'll need to include a polyfill.

Current support: https://caniuse.com/#feat=requestanimationframe

Polyfill: https://gist.github.com/paulirish/1579671
