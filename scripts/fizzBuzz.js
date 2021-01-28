const fizzbuzz = array => array.map(input => {
    switch (true) {
      case input < 0:
        return 'Please provide a positive number. Try again';
      case input > 100:
        return 'Please provide a number below 100';
      case typeof input !== 'number':
        return 'Please provide a number. Try again';
      case input % 15 === 0 || (/15/g).test(input):
        return 'FizzBuzz';
      case input % 3 === 0 || (/3/g).test(input):
        return 'Fizz';
      case input % 5 === 0 || (/5/g).test(input):
        return 'Buzz';
      default:
        return input;
    }
  });
  
  module.exports.fizzbuzz = fizzbuzz;