const numbers = [{
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
},
{
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC',
},
{
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM',
},
{
  1: 'M',
  2: 'MM',
  3: 'MMM',
}];


const splitUp = input => {
  const romNum = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let group = input[0];
  const groupArr = [];
  const arr = Array.from(input);

  arr.forEach((char, index) => {
    const nextCharIndex = romNum.indexOf(input[index + 1]);
    const currentCharIndex = romNum.indexOf(input[index]);
    const lastCharIndex = romNum.indexOf(input[index + 1]) !== -1;

    if (nextCharIndex <= currentCharIndex && lastCharIndex) {
      group += input[index + 1];
    } else {
      groupArr.push(group);
      group = input[index + 1];
    }
  });

  return groupArr;
};

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

const reverseConverter = str => {
  const arr = splitUp(str);
  const output = [];
  const objectID = [];

  arr.forEach(group => {
    numbers.forEach(index => {
      const value = getKeyByValue(index, group);
      if (value) {
        output.push(parseInt(value, 10));
        objectID.push(numbers.indexOf(index));
      }
    });
  });

  let result = 0;
  for (let i = 0; i < output.length; i++) {
    result += output[i] * 10 ** objectID[i];
  }
  return result > 3000 ? `${str} is above 3000.` : result;
};

const convertForm = () => {
  const inputForm = document.getElementById('form').value;
  const result = reverseConverter(inputForm);
  let output = document.getElementById('result');
  output.innerHTML = `Roman numeral: '<b>${inputForm}</b>' <br> Arabic numeral: '<b>${result}</b>'`;
}
