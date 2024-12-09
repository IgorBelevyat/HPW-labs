'use strict';

const fn = () => {
  const obj1 = { name: 'Markus' };
  let obj2 = { name: 'Biden' };

  obj1.name = 'Aleksandr'; //можна змінювати властивості обєкта в const
  obj2.name = 'Trump'; //можна змінювати властивості в обєкта в let

  // obj1 = {name: 'Tsesar'} Тут помилка, бо посилання записане в const, не можна зімнювати
  obj2 = { name: 'Obama' }; //можна змінити посилання в let
  return { obj1, obj2};
};
//Через те, що тут є коментарі, ця програма не проходить тести.

module.exports = { fn };
