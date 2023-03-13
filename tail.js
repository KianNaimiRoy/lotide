const assertEqual = require("./assertEqual");
const tail = function(arr1) {
  return arr1.slice(-1)[0];
};

module.exports = tail;