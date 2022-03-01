//select the aside, then interact with its children
let parent = document.querySelector("aside");

//the children variable has an "array-like" group of elements
let children = parent.children;

for (let i = 0; i < children.length; i++)
{
    children[i].style.border = "1px solid darkgreen";
    children[i].style.borderRadius = "5px";
    children[i].style.padding = "10px 30px";
    children[i].style.backgroundColor = "lightgreen";
}

