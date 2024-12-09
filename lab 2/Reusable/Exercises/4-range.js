'use strict';
function range(start, end) {
  const rangeArray = [];
  for (start; start <= end; start++) {
    rangeArray.push(start);
  }
  return rangeArray;
}
module.exports = { range };
