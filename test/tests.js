// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
import { multiply } from '../calculations.js';
import { divide } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('time to test', (expect) => {
    const expected = 5; 
    const actual = add(2, 3);
    expect.equal(actual, expected);
});
test('time to test', (expect) => {
    const expected = 5;
    const actual = subtract(10, 5);
    expect.equal(actual, expected);
});
test('time to test', (expect) => {
    const expected = 50;
    const actual = multiply(10, 5);
    expect.equal(actual, expected);
});
test('time to test', (expect) => {
    const expected = 5;
    const actual = divide(10, 2);
    expect.equal(actual, expected);
});


