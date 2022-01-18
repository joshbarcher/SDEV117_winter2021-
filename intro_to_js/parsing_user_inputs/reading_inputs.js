//read in two numbers
let num1 = prompt("Enter a number");
let num2 = prompt("Enter a number");

console.log(typeof num1);
console.log(typeof num2);

//convert our inputs from strings to numbers
let firstNumber = Number(num1);
let secondNumber = Number(num2);

//another way...
num1 = Number(num1);
num2 = Number(num2);

//even another way...
num1 = parseInt(num1);
num2 = parseInt(num2);

//add them together
let added = num1 * num2;

//show the result
let outputPara = document.querySelector("#output");
outputPara.innerText = "Result: " + added;
