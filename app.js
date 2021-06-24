// import functions
// import add function
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';

// reference needed DOM elements
// num-1, num2, answer span, add btn
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addAnswerSpan = document.getElementById('add-answer');
const addBtn = document.getElementById('add-btn');

const subtractInput1 = document.getElementById('subtract-num1');
const subtractInput2 = document.getElementById('subtract-num2');
const subtractAnswerSpan = document.getElementById('subtract-answer');
const subtractBtn = document.getElementById('subtract-btn');

const multiplyInput1 = document.getElementById('multiply-num1');
const multiplyInput2 = document.getElementById('multiply-num2');
const multiplyAnswerSpan = document.getElementById('multiply-answer');
const multiplyBtn = document.getElementById('multiply-btn');

const divideInput1 = document.getElementById('divide-num1');
const divideInput2 = document.getElementById('divide-num2');
const divideAnswerSpan = document.getElementById('divide-answer');
const divideBtn = document.getElementById('divide-btn');


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)


  //add event listener to button click
  // get the value #add-num1 -- convert to number
  // get the value #add-num2 -- convert to number
  addBtn.addEventListener('click', ()=>{
    const add1 = Number(addInput1.value);
    const add2 = Number(addInput2.value);
    const answer = add(add1, add2);
    console.log(answer);
    addAnswerSpan.textContent = answer;
  });
  subtractBtn.addEventListener('click', ()=>{
    const subtract1 = Number(subtractInput1.value);
    const subtract2 = Number(subtractInput2.value);
    const answer = subtract(subtract1, subtract2);
    console.log(answer);
    subtractAnswerSpan.textContent = answer;
  });
  multiplyBtn.addEventListener('click', ()=>{
    const multiply1 = Number(multiplyInput1.value);
    const multiply2 = Number(multiplyInput2.value);
    const answer = multiply(multiply1, multiply2);
    console.log(answer);
    multiplyAnswerSpan.textContent = answer;
  });
  divideBtn.addEventListener('click', ()=>{
    const divide1 = Number(divideInput1.value);
    const divide2 = Number(divideInput2.value);
    const answer = divide(divide1, divide2);
    console.log(answer);
    divideAnswerSpan.textContent = answer;
  });