'use strict';

const difference = (array1, array2) => {
  const result = [];
  for (const i of array1) {
    if (!array2.includes(i)) {
      result.push(i);
    }
  }
  return result;
};

module.exports = { difference };
