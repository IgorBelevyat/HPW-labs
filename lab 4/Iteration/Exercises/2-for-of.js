'use strict';

function sum(...args) {
  let accumulator = 0;
  for (const i of args) {
    accumulator += i;
  }
  return accumulator;
}

module.exports = { sum };
