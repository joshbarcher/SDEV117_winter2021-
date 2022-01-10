//select elements by id
let title = document.getElementById("title");
let list = document.getElementById("hobbies-list");
let message = document.getElementById("message");

//change the elements using their properties (innerHTML, innerText, style)
title.innerHTML = "<code>View My Hobbies</code>";
message.innerText = "Thanks for stopping by my webpage";

//add to the text in the element
message.innerText += "This page was created by Josh";

//alternatively, select elements using a "CSS Selector"
let orderedList = document.querySelector("ol.messages");
orderedList.innerHTML = "<li>Hello, how are you?</li>";

let favorite = document.querySelector("#hobbies-list li:first-child");
favorite.style.border = "2px solid pink";

//example of magic numbers
let width = favorite.clientWidth / 2 + 50;

//use the width variable
let height = someValue + 50;

