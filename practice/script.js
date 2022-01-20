let button = document.querySelector("button");
button.onclick = function() {
    //your code goes here
    //console.log('hello');

    //select the input element on our page
    let textbox = document.getElementById("age");
    //console.log(textbox);

    //get the text typed in the box
    let textTyped = textbox.value;
    //console.log(typeof textTyped);

    //convert the text in the box to a number
    textTyped = parseInt(textTyped);
    console.log(typeof textTyped);

    //perform arithmetic... (later....)
    let result = textTyped * 12000;
    console.log(result);
};