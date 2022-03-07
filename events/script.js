//select our button
let button = document.querySelector("button");

//then add different types of event handlers
button.onclick = function() {
    sendOutput("Clicked on button");
};

button.onclick = function() {
    sendOutput("Hello world!");
};

button.ondblclick = function() {
    sendOutput("Double clicked on button");
};

button.onmouseenter = function() {
    sendOutput("Mouse entered button");
};

button.onmouseleave = function() {
    sendOutput("Mouse left button");
};

button.onfocus = function() {
    sendOutput("Button gained focus");
};

button.addEventListener("click", function() {
    sendOutput("First");
});

button.addEventListener("click", function() {
    sendOutput("Second");
});

//add an event handler to a group of elements
let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++)
{
    buttons[i].onclick = handleButtonClick; //referencing the function below by name!
}

function handleButtonClick(event) {
    sendOutput("Clicked 'some' button");

    //how would you print out the text on the button that was clicked?
    sendOutput("Button value: " + buttons[i].textContent);
}

function sendOutput(text)
{
    let textArea = document.querySelector("textarea");
    textArea.innerHTML = text + "\n" + textArea.innerHTML;
}













