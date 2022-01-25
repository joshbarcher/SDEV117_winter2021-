
//write a loop that prints out 3, 4, 5, 6, 7, 8, 9 to the console
//alternative condition i < 10
let output = "";
for (let i = 3; i <= 9; i++)
{
    output += `${i}, `;
}
console.log(output); //output everything on one line!

//write a loop that prints out 4, 6, 8, 10, 12 to the console

//reset output
output = "";
for (let i = 4; i < 13; i += 2)
{
    output += `${i}, `;
}
console.log(output);

