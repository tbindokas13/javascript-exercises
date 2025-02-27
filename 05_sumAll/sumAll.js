// Sum of the first n natural number formula is n(n+1)/2
const sumAll = function (startNumber, endNumber) {
  if (!(isPositiveInteger(startNumber) && isPositiveInteger(endNumber)))
    return "ERROR";
  return (Math.abs(endNumber-startNumber)+1) * (startNumber + endNumber) / 2;
};

function isPositiveInteger(input) {
  return Number.isInteger(input) && input > 0;
}

// Do not edit below this line
module.exports = sumAll;
