//the innermost function (prompt) will execute first
let age = parseInt(prompt("What is your age"));

//no curly brackets (one statement in each block)
if (age < 10)
    console.log("You've a kid");
else if (age < 30)
    console.log("Go have some fun!");
else
    console.log("Stay healthy!");

//avoid this style (for now)
if (age < 10) console.log("You've a kid");
else if (age < 30) console.log("Go have some fun!");
else console.log("Stay healthy!");