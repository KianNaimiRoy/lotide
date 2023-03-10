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
if (eqArrays(arr1, arr2)){
  console.log(`✅${arr1} is equal to ${arr2}`)
} else{
  console.log(`🛑${arr1} is not equal to ${arr2}`)
}
  return;
};

console.log(assertArraysEqual(['one', 'array'], [2, 2, 3]))
console.log(assertArraysEqual([2, 2, 3], [2, 2, 3]))
//console.log(assertEqual(eqValue, true))
//console.log(assertEqual('abc', '124'))