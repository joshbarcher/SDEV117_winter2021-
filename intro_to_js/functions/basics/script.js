function randomNumber()
{
    //generate numbers between 1-10000
    let randNum = Math.floor(Math.random() * 10000) + 1;
    console.log(`Number - ${randNum}`);
}

for (let i = 1; i <= 10; i++)
{
    randomNumber();
}

console.log();
console.log("My favorite is: ");
randomNumber();

//work with inputs (parameters) and outputs (return values)

add(10, 30);

function add(op1, op2)
{
    let result = op1 + op2;
    console.log(result);
}













