
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { return false };

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false };
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  const isEqual = assertEqual(eqArrays(arr1, arr2), true)
  return isEqual;
};


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

console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4, 5, 6]))