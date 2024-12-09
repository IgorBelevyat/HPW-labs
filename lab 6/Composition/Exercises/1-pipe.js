'use strict';

const pipe = (...fns) =>
  !fns.every((fn) => typeof fn === 'function')
    ? (() => {
        throw new Error('All arguments must be functions');
      })()
    : (x) => fns.reduce((v, f) => f(v), x);

module.exports = { pipe };
