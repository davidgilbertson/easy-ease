# Easy Ease
A tiny easing package (~0.2 KB gzipped) with no dependencies. For doing stuff like:
* Scrolling smoothly to the top of the page
* Sliding out a navigation menu
* Sliding open an accordion component

You won't find any options for different types of easing here. What you get is a nice ease-in-out 
similar to the default animation for `transition` in CSS.

If you'd prefer to choose from the full suite of 
Robert Penner equations, try [tween.js](https://www.npmjs.com/package/@tweenjs/tween.js)
or [d3-ease](https://www.npmjs.com/package/d3-ease) instead.

# Usage
`npm install easy-ease`

## Example

To scroll the window to the top of the page:

```js
import ease from 'easy-ease';

ease({
  startValue: window.scrollY,
  endValue: 0,
  onStep: value => window.scroll(0, value),
});
```

Have a play with some other examples on CodePen https://codepen.io/davidgilbertson/pen/GyrZNz

## API
The `ease` function takes a single parameter, an object. The properties of that object are:

| Property | Type | Description | Default |
| ---- | ---- | ---- | ---- |
| `startValue` | Number | The value at which to start | `0` |
| `endValue` | Number | The value at which to end | `1` |
| `durationMs` | Number | The amount of time (in milliseconds) the transition should take | `200` |
| `onStep` | Function | This will be called on each step of the transition. That's once for each 'animation frame' - roughly every 16 milliseconds. The current value is passed as the only argument. The last time it is called the value is guaranteed to be `endValue`. | No default |
| `onComplete` | Function | Called when the transition is complete. Will be called after the final call to `onStep`. No argument is passed to this function. | noop |
