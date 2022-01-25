//select the area for entities
let entities = document.getElementById("entities");

//try outputing a few entities
//entities.innerHTML = "&copy; &yen; &pound; &hearts;";

//let's print out the first 100 or so html entities (with numbers 100-200)
for (let i = 100; i <= 50000; i++)
{
    //I need to generate HTML entities with the form &#num; -> &#100; &#101;....
    let entity = "&#" + i + "; ";
    entities.innerHTML += entity;
}

