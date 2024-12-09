'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip.split(".")
    .map(Number)
    .reduce((accumulator, byte, index) => accumulator + (byte << (8 * (3 - index))), 0);

module.exports = { ipToInt };
