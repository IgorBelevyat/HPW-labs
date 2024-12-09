'use strict';
const phonebook = {
  'Marcus Aurelius': '+380445554433',
  'Gaius Julius Tsesar': '+380501234567',
  'Socrates': '+380631112223',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
