const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅Assertion Passed: ${actual} === ${expected}`;
  }
  if (actual !== expected) {
    return `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`;
  }
};

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

console.log(assertArraysEqual(['one', 'array'], [2, 2, 3]))
console.log(assertArraysEqual([2, 2, 3], [2, 2, 3]))
//console.log(assertEqual(eqValue, true))
//console.log(assertEqual('abc', '124'))