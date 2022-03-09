//wait until the page loads
window.onload = function() {
    //put all changes in here...
    let formElements = document.querySelectorAll("input, select");

    //loop over all the elements and add event handlers
    for (let i = 0; i < formElements.length; i++)
    {
        let formElement = formElements[i];
        formElement.onfocus = gainFocus;
        formElement.onblur = loseFocus;
    }
};

function gainFocus(event)
{
    //highlight the element with focus
    let someElement = event.target;
    someElement.style.backgroundColor = "lightgreen";
}

function loseFocus(event)
{
    //remove the highlight
    let someElement = event.target;
    someElement.style.backgroundColor = "";
}