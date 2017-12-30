const assert = require('assert');
const ease = require('../lib/easyEase').default;

let rafCalls = 0;

global.window = {
  requestAnimationFrame: func => {
    rafCalls++;
    func();
  }
};

// rudimentary testing function
function it(desc, func) {
  let result;

  try {
    result = func();

    result.test(result.actual, result.expected, desc);

    console.info(`✓ "${desc}" passed.`);
  } catch (err) {
    console.error(`✘ "${desc}" failed. Expected ${result.actual} to be ${result.expected}`);
  }
}

it('should apply a default start value', () => {
  let startValue = null;

  ease({
    onStep: value => {
      if (startValue === null) startValue = value;
    }
  });

  return {
    actual: Math.round(startValue),
    expected: 0,
    test: assert.equal,
  };
});

it('should apply a default end value', () => {
  let endValue = null;

  ease({
    onStep: value => {
      endValue = value;
    }
  });

  return {
    actual: endValue,
    expected: 1,
    test: assert.equal,
  };
});

it('should apply a default duration', () => {
  let onStepCalls = 0;
  const expectedDuration = 200;

  ease({
    onStep: () => onStepCalls++
  });

  return {
    actual: onStepCalls,
    expected: Math.round(expectedDuration / 16),
    test: assert.equal,
  };
});

it('should call onComplete() when complete', () => {
  let onCompleteCalled = false;

  ease({
    onStep: () => {},
    onComplete: () => {
      onCompleteCalled = true;
    }
  });

  return {
    actual: onCompleteCalled,
    expected: true,
    test: assert.equal,
  };
});

it('should throw if onStep is not provided', () => {
  return {
    actual: () => {
      ease({});
    },
    test: assert.throws,
  };
});
