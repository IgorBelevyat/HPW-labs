'use strict';
function rangeOdd(start, end) {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      rangeArray.push(i);
    }
  }
  return rangeArray;
}
module.exports = { rangeOdd };
