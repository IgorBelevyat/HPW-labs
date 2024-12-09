'use strict';
const array = () => {
    const internalArr = [];
    const get = (index) => internalArr[index];
    get.push = (value) => internalArr.push(value);
    get.pop = () => internalArr.pop();
    return get;
};
module.exports = { array };
