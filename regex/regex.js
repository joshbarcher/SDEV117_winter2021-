let pattern = /^cat .* hat$/;
let sentence = prompt("Enter a sentence");

if (pattern.test(sentence))
{
    console.log("Pattern matches");
}
else
{
    console.log("Pattern does not match");
}


