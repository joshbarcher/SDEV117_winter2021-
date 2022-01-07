//select elements by id
let title = document.getElementById("title");
let list = document.getElementById("hobbies-list");
let message = document.getElementById("message");

//change the elements using their properties (innerHTML, innerText, style)
title.innerHTML = "<code>View My Hobbies</code>";
message.innerText = "Thanks for stopping by my webpage";

//add to the text in the element
message.innerText += "This page was created by Josh";
