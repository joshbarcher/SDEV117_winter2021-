//we can select form element values using the "value" property
let textbox = document.querySelector("input");
let textboxValue = textbox.value;
console.log(textboxValue);

let dropdown = document.querySelector("select");
let dropdownValue = dropdown.value;
console.log(dropdownValue);

//we can select non-interactable element text using one of
//these properties: innerHTML, innerText, textContent
let paragraph = document.querySelector("p");
let paragraphText = paragraph.textContent;
console.log(paragraphText);

//change an html attribute using setAttribute
textbox.setAttribute("title", "Enter your name carefully");
textbox.setAttribute("readonly", "true");

//select the anchor and change the href attribute
let link = document.querySelector("a");
link.setAttribute("href", "https://en.wikipedia.org/wiki/Main_Page")

console.log(link.getAttribute("href"));









