const convertToCelsius = function(F) {
  let C = Math.fround((F - 32) * 5 / 9);
  return Number.isInteger(C) ? C : +C.toFixed(1);
};

const convertToFahrenheit = function(C) {
  let F =  Math.fround(C * 9 / 5 + 32)
  return Number.isInteger(F) ? F : +F.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
