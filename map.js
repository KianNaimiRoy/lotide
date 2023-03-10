const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { return false };
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false };
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
if (eqArrays(arr1, arr2)){
  console.log(`✅[${arr1}] === [${arr2}]`)
} else{
  console.log(`🛑[${arr1}] !== [${arr2}]`)
}
  return;
};

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } 
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => 'happy ' + word)
const prices = [2, 455, 56]
const results3 = map(prices, price => price * .5)

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ] );
assertArraysEqual(results2, [ "happy ground", "happy control", "happy to", "happy major", "happy tom"]);
assertArraysEqual(results3, [1, 227.5, 28])