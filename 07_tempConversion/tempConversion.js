const convertToCelsius = function(temperature) {
  cels = (temperature-32)*(5/9);
  result = Math.round(cels*10)/10;
  return result;
};

const convertToFahrenheit = function(temperature) {
  fahr = (temperature*(9/5)+32);
  result = Math.round(fahr*10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
