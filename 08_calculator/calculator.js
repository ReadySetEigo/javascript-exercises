const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(input) {
	return input.reduce((total, current) => total + current, 0);
};

const multiply = function(input) {
	return input.reduce((total, current) => total * current);
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
