//generate coin flips using random numbers
//0 = heads, 1 = tails

//Program - flip coins until heads comes up three times
let headsCount = 0;
while (headsCount < 5)
{
    //multiply the percentage in num by the max value, then round down
    let percentage = Math.random();
    let flip = Math.floor(percentage * 2);

    if (flip === 0)
    {
        headsCount++;
        console.log("Heads");
    }
    else if (flip === 1)
    {
        console.log("Tails");
    }
}



