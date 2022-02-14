let testArray = [1, 3, 7, 9, 11];
let even = areAnyEven(testArray);

console.log("Any even? " + even);

//declare a function that accepts an array of numbers
//and returns true if one of the numbers is even, or
//otherwise return false
function areAnyEven(numArray)
{
    for (let i = 0; i < numArray.length; i++)
    {
        let singleNum = numArray[i];
        if (singleNum % 2 == 0)
        {
            return true;
        }
    }

    //return false if we looked through the
    //entire array and found no even nums
    return false;
}

