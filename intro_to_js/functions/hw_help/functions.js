
//the "job" of this function is to return true if the
//input number is negative, or otherwise false
function isNegative(num)
{
    if (num < 0)
    {
        //it's negative
        return true;
    }
    else
    {
        //it's non-negative
        return false;
    }
}

let result = isNegative(10);
console.log("Is 10 negative? " + result);