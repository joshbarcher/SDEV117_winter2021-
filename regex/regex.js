//what would be a pattern to match a date like 10-02-22
let pattern = /^\d{1,2}-\d{1,2}-(\d{2}|\d{4})$/;
let sentence = prompt("Enter a sentence");

if (pattern.test(sentence))
{
    console.log("Pattern matches");
}
else
{
    console.log("Pattern does not match");
}


