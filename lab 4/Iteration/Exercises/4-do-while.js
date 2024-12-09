'use strict';

const sum = (...args) => {
  let a = 0;
  let i = 0;

  if (args.length === 0) return 0;

  do {
    a += args[i];
    i++;
  } while (i < args.length);

  return a;
};

module.exports = { sum };
