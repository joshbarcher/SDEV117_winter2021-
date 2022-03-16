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

    //make sure the name is 3-10 characters
    let error = document.querySelector("#name-error");
    if (name.length >= 3 && name.length <= 10)
    {
        error.style.display = "none";
    }
    else
    {
        error.style.display = "inline-block";
    }

    //make sure the age is 1-100
    error = document.querySelector("#age-error");
    if (age >= 1 && age <= 100)
    {
        error.style.display = "none";
    }
    else
    {
        error.style.display = "inline-block";
    }
}

