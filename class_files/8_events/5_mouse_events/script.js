const AREA = 600;
const IMG_WIDTH = 100;
const MAX_DIMENSION = AREA - IMG_WIDTH;

window.onload = function() {
    handleImgClicks();
    handleBackgroundClicks();
};

function handleBackgroundClicks()
{
    let container = document.querySelector("#container");
    container.onclick = function(event) {
        let x = event.clientX;
        let y = event.clientY;

        //don't allow clicking that puts the image outside of the background
        if (x > 550 || y > 550)
        {
            return; //exit
        }

        x -= 50;
        y -= 50;

        console.log(x + ", " + y);

        let img = document.querySelector("img");
        img.style.left = x + "px";
        img.style.top = y + "px";
    };
}

function handleImgClicks()
{
    let img = document.querySelector("img");
    img.onclick = function(event) {
        let randomX = Math.random() * MAX_DIMENSION;
        let randomY = Math.random() * MAX_DIMENSION;

        img.style.left = randomX + "px";
        img.style.top = randomY + "px";
    };
}