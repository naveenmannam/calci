// Get the Ids

var numberOne = document.getElementById('numOne');
var numberTwo = document.getElementById('numTwo');
var result = document.getElementById('result');
var enter = document.getElementById('enter');
var reset = document.getElementById('reset');
var plus = document.getElementById('plus');
var minu = document.getElementById('minu');
var divi = document.getElementById('divi');
var mult = document.getElementById('mult');
var operator;
var numbers;

// Functions for event listeners

function action() {
    if((numberOne.value == "") && (numberTwo.value == "")) {
        result.innerText = "Fields can not be blank";
    } else {
        one = Number(numberOne.value);
        two = Number(numberTwo.value);
        console.log(operator);
        if (operator == '+'){
            numbers = one + two;
            result.innerText = "Sum of two numbers : " + numbers;
        }
        else if (operator == '-') {
            numbers = one - two;
            result.innerText = "Minus of two numbers : " + numbers;
        }
        else if (operator == '/'){
            if(two === 0){
                result.innerText = "Division by Zero is not valid"
            }
            else{
                numbers = (one / two);
                result.innerText = "Division of two numbers : " + numbers.toFixed(3);
            }
        }
        else if (operator == '*'){
            numbers = one * two;
            result.innerText = "Multiplication of two numbers : " + numbers;
        }
        else {
            result.innerText = "Operator not selected.";
        }
    }

}

function resetFields() {
    numberOne.value = "";
    numberTwo.value = "";
    result.innerText = "";
    operator = "";
}

function getDetails() {
    operator = this.value;
    return operator;
}

// Event listeners
enter.addEventListener('click', action);
reset.addEventListener('click', resetFields);
plus.addEventListener('click', getDetails);
minu.addEventListener('click', getDetails);
divi.addEventListener('click', getDetails);
mult.addEventListener('click', getDetails);
