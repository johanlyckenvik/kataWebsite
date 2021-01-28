const { numbers } = require('./romanNumbers');

const convertInput = num => num.toString().split('').reverse();
const convertOutput = arr => arr.map((n, index) => numbers[index][n]).reverse().join('');

const converter = num => {
  if (!Number.isInteger(num)) {
    return `'${num}' is not a number.`;
  }
  if (num > 3000) {
    return `${num} is above 3000.`;
  }
  if (num <= 0) {
    return `${num} is not a valid number.`;
  }
  return convertOutput(convertInput(num));
};

module.exports.converter = converter;