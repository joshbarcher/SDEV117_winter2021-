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

//bold every other historical figure in the list
let list = document.querySelector(".list");
let listItems = list.children;

list.innerHTML += "<li>Mark Twain</li>";
list.innerHTML += "<li>Charles Spurgeon</li>";
list.innerHTML += "<li>Ghandi</li>";

//create a new list item (not yet connected to the DOM)
let newItem = document.createElement("li");
newItem.textContent = "George Washington";
newItem.style.color = "blue";
newItem.setAttribute("title", "1st president of the USA");

//add the element to the DOM
list.appendChild(newItem);

console.log(list);
console.log(listItems);

for (let i = 1; i < listItems.length; i += 2)
{
    let item = listItems[i];
    item.style.fontWeight = "bold";
}

//add an event handler to enter a new table row
let button = document.querySelector("button");
button.onclick = function() {
    //ask the user for their details (name, email, phone)
    let name = prompt("Enter your name");
    let email = prompt("Enter your email");
    let phone = prompt("Enter your phone number");

    //enter those as a new row in the table
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let phoneCell = document.createElement("td");

    nameCell.textContent = name;
    emailCell.textContent = email;
    phoneCell.textContent = phone;

    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);

    //add the new row to the table
    let tbody = document.querySelector("#contact-table tbody");
    tbody.appendChild(row);
};















