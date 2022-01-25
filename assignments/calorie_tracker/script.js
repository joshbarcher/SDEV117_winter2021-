//this registers the button click events when the
//page loads
window.onload = function() {
    //register button events when the page loads
    document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
    document.getElementById("workout-to-met").onclick = workoutToMet;
    document.getElementById("calc-calories").onclick = calculateCalories;
}

//convert lbs to kgs from the input fields in the
//page and send output to the console
function lbsToKgs()
{
    output("Hello, world");

    let lbsBox = document.getElementById("lbs");
    let lbsText = lbsBox.value;
    let lbsNum = parseFloat(lbsText);

    if (lbsText === "")
    {
        output("Please enter a valid value!");
    }
    else
    {
        output("You entered: " + lbsText);
    }

    //to check whether a number is NaN
    if (Number.isNaN(lbsNum))
    {

    }
}

//determine MET value for exercises in the dropdown
//list and send output to the console
function workoutToMet()
{

}

//Calculates the calories burned per minute, given
//the inputs from the page and sends the output
//to the console
function calculateCalories()
{

}

//this function takes the provided message and prints
//it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}