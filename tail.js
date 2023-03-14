const assertEqual = require("./assertEqual");
const tail = function(arr1) {
    if(arr1.length < 2){
      return arr1[0]
    }
  return arr1.slice(1);
};

module.exports = tail;