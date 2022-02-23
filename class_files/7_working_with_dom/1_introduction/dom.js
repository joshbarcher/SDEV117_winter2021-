//select elements that are paragraphs
let paragraphs = document.querySelectorAll("p.even");

//print to the console for debugging purposes
console.log(paragraphs);

//loop over the elements in the NodeList (an array-like structure)
/*for (let i = 0; i < paragraphs.length; i++)
{
    let para = paragraphs[i];

    //make a change to the paragraph
    para.style.backgroundColor = "lightblue";
}*/

//select all article elements on the page and give them a border
let articles = document.querySelectorAll("body > article");

//sanity check!
console.log(articles);

/*for (let i = 0; i < articles.length; i++)
{
    articles[i].style.border = "1px solid black";
    articles[i].style.margin = "6px";
}*/

//select all elements that share a tag name - p, a, span, div, ...
let divs = document.getElementsByTagName("div");

//select all elements that have a common class name
let oddParas = document.getElementsByClassName("odd");

/*addBackgroundColor(paragraphs, "lightgreen");
addBackgroundColor(articles, "lightyellow");*/
addBorder(articles, 2, "darkblue");
addBackgroundColor(divs, "lightyellow");
addBorder(oddParas, 1, "black");

function addBackgroundColor(array, color)
{
    for (let i = 0; i < array.length; i++)
    {
        array[i].style.backgroundColor = color;
    }
}

function addBorder(array, size, color)
{
    for (let i = 0; i < array.length; i++)
    {
        //border property looks like - 2px solid black
        array[i].style.border = size + "px solid " + color;
        array[i].style.margin = "10px";
    }
}









