const chai = require('chai');
const fb = require('./fizzbuzz');
const data = require('./testData');

const { expect } = chai;

describe('fizzbuzz', () => {
  it('should return array from invalid input', () => {
    expect(fb.fizzbuzz(data.input1)).to.eql(data.output1);
  });

  it('should return array from valid input', () => {
    expect(fb.fizzbuzz(data.input2)).to.eql(data.output2);
  });
});