'use strict';

const sum = (...args) => args.reduce((acc, cV) => acc + cV, 0);

module.exports = { sum };
