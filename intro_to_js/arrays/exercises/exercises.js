//#1

//test the function
let largeArray = [1, 2, 3, 4, 5, 6];
let smallArray = [1, 2];

firstThree(largeArray);
firstThree(smallArray);

function firstThree(array)
{
    let min = 3;
    if (array.length < min)
    {
        min = array.length;
    }

    for (let i = 0; i < min; i++)
    {
        console.log(array[i]);
    }
}

//#2
let numbers = [119, 45, 100, 22, 14];
let sum = 0;

for (let i = 0; i < numbers.length; i++)
{
    sum += numbers[i];
}

let avg = sum / numbers.length;
console.log(`Average: ${avg}`);

//#3
let otherNumbers = [63, 42, 12, 55, 121, 101];

//start with the first element as the largest
let largest = otherNumbers[0];

//start looping at the second element (index 1)
for (let i = 1; i < otherNumbers.length; i++)
{
    if (otherNumbers[i] > largest)
    {
        largest = otherNumbers[i];
    }
}

console.log(`The largest is ${largest}`);

//#4

//test the function
sortAndPrint(["raspberry", "cantaloupe", "apple", "orange"]);

function sortAndPrint(array)
{
    array.sort();

    for (let i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
}

//#5

let words = ["pantomime", "argue", "swim", "fan", "until", "again"];
smallestString(words);

function smallestString(stringsArray)
{
    //start with the first element as the largest
    let smallestIndex = 0;

    //start looping at the second element (index 1)
    for (let i = 1; i < stringsArray.length; i++)
    {
        if (stringsArray[i].length < stringsArray[smallestIndex].length)
        {
            smallestIndex = i;
        }
    }

    console.log(stringsArray[smallestIndex]);
}













