const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
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


const without = function (source, itemsToRemove) {
  let newString = []
  for (i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newString.push(source[i]);
  }
}
return newString
};


//if (!itemsToRemove.includes(source[i])) {
// newString.push(source[i])}; //use this instead for inner loop


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);