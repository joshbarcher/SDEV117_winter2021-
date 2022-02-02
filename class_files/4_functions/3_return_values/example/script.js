function print(message)
{
    if (message === "")
    {
        return; //exit function!
    }
    console.log(message);
}

function isEven(number)
{
    if (number % 2 == 0)
    {
        return true;
    }
    return false;
}

let even = isEven(10);
let odd = isEven(9);

console.log(even);
console.log(odd);

if (odd)
{
    console.log("Your number is odd")
}








