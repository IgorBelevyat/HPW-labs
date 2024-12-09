'use strict';

const generateKey = (length, charac) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charac.length);
    result += charac[randomIndex];
  }
  return result;
};

module.exports = { generateKey };
