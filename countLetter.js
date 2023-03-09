const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let itemsCounted = {}
  for (let char of string) {
    if (char === ' ') {
      continue;
    }
    if (itemsCounted[char]) {
      itemsCounted[char] += 1
    }
    else {
      itemsCounted[char] = 1
    }
  }
  return itemsCounted
};
console.log(countLetters('Hey wanna talk about   it?'))
