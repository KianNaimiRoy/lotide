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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
    console.log(`✅${inspect(actual)} is equal to ${inspect(expected)}`)
  } else{
    console.log(`🛑${inspect(actual)} is not equal to ${inspect(expected)}`)
  }
    return;
  };
assertObjectsEqual({1: 1, 2: 2}, {1: 1, 2: 2}) //return equal
assertObjectsEqual({1: 1, 2: 2}, {1: 3, 2: 2}) // return not equal

