// const eqArrays = require("./eqArrays");
// const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {

  const arrayLength = array.length
  if (array.length <= 2) { return [] };
  if (arrayLength % 2 == 1) {
    let middleIndex = array.length / 2
    return array[Math.floor(middleIndex)]
  };
  if (arrayLength % 2 == 0) {
    let middleIndex = array.length / 2
    return [array[middleIndex - 1], array[middleIndex]]
  }
};

module.exports = middle
