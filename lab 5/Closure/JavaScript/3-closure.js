'use strict';

const add = (x) => (y) => {
  const z = x + y;
  console.log(`${x} + ${y} = ${z}`);
  return z;
};

// const add = x => y => x + y;

// Usage

const res = addFunc(3)(6);
console.log(res);
