window.onload = function() {
    let button = document.getElementById("submit");
    button.onclick = validateForm;
}

function validateForm(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //validate the form...
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    age = parseFloat(age);

    let nameLength = () => name.length >= 3 && name.length <= 10;
    let ageRange = () => age >= 1 && age <= 100;

    //make sure the name is 3-10 characters
    validate("#name-error", nameLength);
    validate("#age-error", ageRange);
}

function validate(errorFieldName, condition)
{
    let error = document.querySelector(errorFieldName);
    if (condition())
    {
        error.style.display = "none";
    }
    else
    {
        error.style.display = "inline-block";
    }
}