//generate a random number in the range [1, 10]
let num = Math.floor(Math.random() * 10) + 1;

//generate a random file name for one of the images
//in the project: images/1.png, images/2.png, ...
let fileName = `images/${num}.png`;
console.log(fileName);

//change the <img> src attribute to be the file we generated
let img = document.querySelector("img");
img.setAttribute("src", fileName);

