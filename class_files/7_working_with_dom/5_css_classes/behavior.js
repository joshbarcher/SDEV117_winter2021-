//select all divs
let divs = document.querySelectorAll("div");

//add a class name to all divs
for (let i = 0; i < divs.length; i++)
{
    divs[i].className = "bright";
}

//select the first div and add a class name
let first = document.querySelector("div:first-child");
first.className = "highlighted";

//add a click event handler for the link to remove the
//highlighted div
let hideLink = document.getElementById("hide-baking");
let section = document.querySelector("#baking section");

let collapsed = false;
hideLink.onclick = function() {
    if (!collapsed)
    {
        //hiding the section
        section.className = "hidden";
        hideLink.textContent = "Show";
        collapsed = true;
    }
    else
    {
        //show the section
        section.className = ""; //<-- this removes the class name
        hideLink.textContent = "Hide";
        collapsed = false;
    }
};

