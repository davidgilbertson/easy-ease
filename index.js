var raf = typeof window !== 'undefined' && 'requestAnimationFrame' in window
  ? window.requestAnimationFrame
  : function(func) {
    setTimeout(func, 16)
  };

function ease(options) {
  var startValue = 'startValue' in options ? options.startValue : 0;
  var endValue = 'endValue' in options ? options.endValue : 1;
  var durationMs = 'durationMs' in options ? options.durationMs : 200;
  var onComplete = options.onComplete || function() {};

  var stepCount = durationMs / 16;
  var valueIncrement = (endValue - startValue) / stepCount;
  var sinValueIncrement = Math.PI / stepCount;
  var currentValue = startValue;
  var currentSinValue = 0;

  function step() {
    currentSinValue += sinValueIncrement;
    currentValue += valueIncrement * Math.pow(Math.sin(currentSinValue), 2) * 2;

    if (currentSinValue < Math.PI) {
      options.onStep(currentValue);
      raf(step);
    } else {
      options.onStep(endValue);
      onComplete();
    }
  }

  raf(step);
}

module.exports = ease;
