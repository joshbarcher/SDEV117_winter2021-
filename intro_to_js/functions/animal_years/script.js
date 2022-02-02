//test our functions
let dogAge = 13;
let humanAge = convertDogYears(dogAge);
console.log(`Dog is ${humanAge} human years`);

//our function definitions

function convertDogYears(dogYears)
{
    //convert parameter to a number
    dogYears = parseInt(dogYears);

    //double check that we have a good dog age
    if (dogYears <= 0 || Number.isNaN(dogYears))
    {
        return undefined;
    }

    if (dogYears <= 3)
    {
        return dogYears * 10;
    }
    else
    {
        dogYears -= 3;
        return 30 + dogYears * 7;
    }
}

function convertCatYears()
{

}