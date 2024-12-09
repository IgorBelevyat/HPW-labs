'use strict';

const compose = (...fns) => {
  const errorCallbacks = [];
  const composedFn = (x) => {
    try {
      return fns.reduceRight((v, f) => f(v), x);
    } catch (error) {
      emitError(error);
      return undefined;
    }
  };

  function on(event, callback) {
    if (event === 'error') {
      errorCallbacks.push(callback);
    }
  }

  function emitError(error) {
    errorCallbacks.forEach((callback) => callback(error));
  }
  composedFn.on = on;
  return composedFn;
};

module.exports = { compose };
