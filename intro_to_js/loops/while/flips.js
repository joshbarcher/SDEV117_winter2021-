//generate coin flips using random numbers
//0 = heads, 1 = tails

//Program - flip coins until heads comes up three times consecutively
let headsCount = 0;
let flips = 0;
while (headsCount < 3) //headsCount is a "sentinel" value
{
    //multiply the percentage in num by the max value, then round down
    let percentage = Math.random();
    let flip = Math.floor(percentage * 2);

    flips++;
    if (flip === 0)
    {
        headsCount++;
        console.log("Heads");
    }
    else
    {
        //reset our consecutive number of heads
        headsCount = 0;

        console.log("Tails");
    }
}
console.log(`Total flips: ${flips}`);


