const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { return false };

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false };
  }
  return true;
}


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function (object1, object2) {
  const objectArr1 = Object.keys(object1)
  const objectArr2 = Object.keys(object2)
  if (objectArr1.length !== objectArr2.length) { return false };

  for (let obj of objectArr1) {
    if (object1[obj] !== object2[obj]) {
      return false
    }
  }
  return true
};

const firstObject = { type1: "I'm a value", type2: "I'm also a value" }
const secondObject = { type3: "yet another value", type4: "the last value for now" }
eqObjects(firstObject, secondObject)
assertEqual(eqObjects(firstObject, secondObject), false);

const thirdObject = { matchAgain: "so does this one", matchingKey: "this string matches" }
const fourthObject = { matchingKey: "this string matches", matchAgain: "so does this one" }
eqObjects(thirdObject, fourthObject)
assertEqual(eqObjects(thirdObject, fourthObject), true);

const fifthObject = { matchAgain: "so does this one", matchingKey: "this string matches" }
const sixthObject = { matchingKey: "this string matches", matchAgain: "so does this one", oneDoesNotMatch: "Uh Oh!"}
eqObjects(fifthObject, sixthObject)
assertEqual(eqObjects(fifthObject, sixthObject), true)
