function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function division(number1, number2){
  return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = add(number1, number2);
const result2 = subtract(number1, number2);
const result3 = multiply(number1, number2);
const result4 = division(number1, number2);

alert(result);
alert(result2);
alert(result3);
alert(result4);


