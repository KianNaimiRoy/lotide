const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { return false };

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false };
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
if (eqArrays(arr1, arr2)){
  console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);

} else{
  console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);

}
  return;
};

const letterPositions = function(sentence) {
  const results = {};
for (let i = 0; i < sentence.length; i++){
  const letter = sentence[i]
  if (letter == " "){
    continue;
  }
  if (results[letter] && results[letter].length){
     results[letter].push(i)
  }
  else {
    results[letter] = [i]
  }
}

return results;
};
result = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
}
console.log(letterPositions('What'));
assertArraysEqual(letterPositions("hello").e, [1])
