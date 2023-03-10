const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) { return false };

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false };
  }
  return true;
}
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅${arr1} is equal to ${arr2}`)
  } else {
    console.log(`🛑${arr1} is not equal to ${arr2}`)
  }
  return;
};

const takeUntil = function (array, callback) {
  let newArray = []
  for (let ii = 0; ii < array.length; ii++) {
    if (callback(array[ii]) == true) {return newArray
    }else{
    newArray.push(array[ii])
  }
}
  return newArray
  };

  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const results1 = takeUntil(data1, x => x < 0);
  console.log(results1);

  console.log('---');

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const results2 = takeUntil(data2, x => x === ',');
  console.log(results2);