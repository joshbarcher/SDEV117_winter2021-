window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = summarize;
}

function summarize(event)
{
    //stop the form from submitting
    event.preventDefault();

    //practice interacting with radio buttons
    let radioButtons = document.querySelectorAll("input[type='radio']");
    console.log(radioButtons);

    //loop over the buttons and figure out which one is selected
    for (let i = 0; i < radioButtons.length; i++)
    {
        let radioButton = radioButtons[i];
        if (radioButton.checked)
        {
            console.log("You selected " + radioButton.value);
        }
    }

    //practice interacting with checkboxes
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    console.log(checkboxes);

    //loop over the checkboxes and figure out which ones are selected
    for (let i = 0; i < checkboxes.length; i++)
    {
        let checkbox = checkboxes[i];
        if (checkbox.checked)
        {
            console.log("You checked " + checkbox.value);
        }
    }
}















