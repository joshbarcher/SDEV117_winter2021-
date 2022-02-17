//create an empty Hobby object
let hobby = {
    isFun: true,
    me: "Josh",
    "is it expensive": true
};

//add features related to the hobby later
hobby.name = "gaming";
hobby.hoursPerWeek = 10;
hobby.playGame = function() {
    console.log("Playing...");
};

console.log(`You spent ${hobby.hoursPerWeek} hours on your hobby`);
hobby.playGame();

console.log(hobby);

//alternative way to reference properties
console.log(hobby["name"]);
console.log(hobby["hoursPerWeek"]);
console.log(hobby["me"]);

//how would you print out whether the hobby is expensive or not?
console.log(hobby["is it expensive"]);











