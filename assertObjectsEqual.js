
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertObjectsEqual;
