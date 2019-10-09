let firstNumberElement = document.querySelector('#firstNumber');
let secondNumberElement = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let multiplyButton = document.querySelector('#multiply-button');
let divideButton = document.querySelector('#divide-button');
let clearButton = document.querySelector('#clear-button');
let form = document.querySelector('#calc-form');
form.addEventListener('submit',function(e) {
    e.preventDefault();
});
let mainCalculation=()=>{

}
// Click on Minus Button
minusButton.addEventListener('click',function() {
    operatorButton.textContent = minusButton.textContent;
});

// Click on Plus Button
plusButton.addEventListener('click',function() {
    operatorButton.textContent = plusButton.textContent;
});

// Click on Multiply Button
multiplyButton.addEventListener('click',function() {
    operatorButton.textContent = multiplyButton.textContent;
});

// Click on divide Button
divideButton.addEventListener('click',function() {
    operatorButton.textContent = divideButton.textContent;
});
