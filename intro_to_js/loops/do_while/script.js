//ask the user for a number (repeatedly if necessary)
//then print the number

let num;
do
{
    //ask the user for the number
    num = prompt("Enter a number");

    //convert to a number
    num = parseInt(num);
} while (Number.isNaN(num)); //loop if the num variable contains NaN

console.log(`Number is ${num}`);