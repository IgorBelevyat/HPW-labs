'use strict';

const unique = (array) => {
  let i = 0;
  const result = [];
  while (i < array.length) {
    const cur = array[i];
    if (!~result.indexOf(cur)) {
      result.push(cur);
    }
    i++;
  }
  return result;
};

module.exports = { unique };
