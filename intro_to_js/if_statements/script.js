//gather some user inputs
let typeOfTips = prompt("Enter a cooking type (grilling, baking, steaming)");

//DRY rule - DO NOT REPEAT YOURSELF!
//(don't copy paste code!)

let list = document.getElementById("tips");
if (typeOfTips === "grilling")
{
    let beginner = confirm("Are you a beginner?");
    if (beginner)
    {
        list.innerHTML += "<li>Start with a clean grill</li>";
    }
    else
    {
        list.innerHTML += "<li>Don't move the food around</li>";
        list.innerHTML += "<li>Don't squeeze or flatten meats</li>";
    }

    //these tips are added for beginners and pros
    list.innerHTML += "<li>Keep a spray bottle handy for flare-ups</li>";
    list.innerHTML += "<li>Buy a meat thermometer</li>";
}
else if (typeOfTips === "baking")
{
    list.innerHTML += "<li>Measure Properly</li>";
    list.innerHTML += "<li>Invest in a good mixer</li>";
}
else if (typeOfTips === "steaming")
{
    list.innerHTML += "<li>Don't Add Too Much Water</li>";
    list.innerHTML += "<li>Boil the Water First</li>";
}
else
{
    let errorElement = document.getElementById("error");
    errorElement.innerText = "I don't know of any tips for (" +
        typeOfTips + ")";
}
