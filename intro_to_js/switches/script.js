/*let hobbies = prompt("Enter your favorite hobby");

switch (hobbies)
{
    case "hiking":
        console.log("What was your last trail?");
        break;
    case "gaming":
        //some code
        console.log("What's your favorite genre?");
        console.log("What's your favorite game?");
        break;
    case "digital art":
        //some more code
        console.log("What program do you use?");
        break;
    case "tracking the moon":
        console.log("Tell me something interesting about the moon");
        break;
    default:
        console.log("I have no comment on " + hobbies);
        console.log("Hope you enjoy your hobby!");
        break;
}*/

let monthBorn = prompt("Enter the month you were born");

switch(monthBorn)
{
    //31 days
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(`${monthBorn} has 31 days`);
        break;

    //30 days
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(`${monthBorn} has 30 days`);
        break;

    //february (28 or 29)
    case "February":
        console.log(`${monthBorn} has 28 or 29 days`);
        break;

    //bad inputs
    default:
        console.log("Please enter a valid month");
        break;
}


















