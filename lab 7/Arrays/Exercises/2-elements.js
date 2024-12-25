'use strict';

const removeElements = (array, ...items) => {
  let i = 0;
  while (i < array.length) {
    if (items.includes(array[i])) {
      array.splice(i, 1);
    } else {
      ++i;
    }
  }
  return array;
};

module.exports = { removeElements };
