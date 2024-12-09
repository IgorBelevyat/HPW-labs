'use strict';
const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Gaius Julius Tsesar', phone: '+380501234567' },
  { name: 'Socrates', phone: '+380631112223' },
];

const findPhoneByName = name => {
  for (const p in phonebook) {
    return p === name ? phonebook[p] : undefined;
  }
};
  
module.exports = { phonebook, findPhoneByName };
