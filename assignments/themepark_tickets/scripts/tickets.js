/*
    This file calculates the cost of theme park tickets when
    the user clicks the calculate button.
    Author:
    File:
    Date:
*/

let button = document.querySelector("button");
button.onclick = function(event) {
    //prevent the form from submitting
    event.preventDefault();

    //your code goes here...
    console.log("Hello, world!");

    //select the textbox
    let textbox = document.getElementById("num");
    let userInput = textbox.value;

    //double the user input
    userInput *= 2;

    console.log("Value in box - " + userInput);

    //select the output paragraph and show the results
    let outputPara = document.getElementById("output");
    outputPara.innerText = "Here is the result: " + userInput;
}

//don't put any code down here...!











