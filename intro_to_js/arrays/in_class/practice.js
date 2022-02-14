//create an array with numbers inside of it
let numbers = [101, 42, 3, 7, 11, 19, 20];


console.log("Array length: " + numbers.length);

//let's pick a number from the array randomly, then print it out
/*for (let i = 1; i <= 100; i++)
{
    let randomIndex = Math.floor(Math.random() * numbers.length);
    //console.log("Random index: " + randomIndex);
    console.log("Random element: " + numbers[randomIndex]);
}*/

//loop over our array and print out the elements
for (let i = 0; i <= numbers.length - 1; i++)
{
    console.log(numbers[i]);
}

//multiply all numbers in the array together and print the product!
let product = 1;
for (let i = 0; i < numbers.length; i++)
{
    product *= numbers[i];
}
console.log("Product of all elements in the array: " + product);







