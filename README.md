# Easy Ease
A tiny easing package (< 0.5 KB) with no dependencies.

Play with me on codepen https://codepen.io/davidgilbertson/pen/GyrZNz

# Usage
Install: `npm install easy-ease`

```js
import ease from 'easy-ease';

ease({
  startValue: 0, // optional, default is 0
  endValue: 100, // optional, default is 1
  durationMs: 300, // optional, default is 200
  onStep: value => {
    // do something with the value
  },
  onComplete: () => { // optional, default is noop
    console.log('Animation complete');
  }
});
```

# Requirements
This package assumes that `window.requestAnimationFrame` exists.

If you want to support older browsers you'll need to include a polyfill.

Support: https://caniuse.com/#feat=requestanimationframe

Polyfill: https://gist.github.com/paulirish/1579671
