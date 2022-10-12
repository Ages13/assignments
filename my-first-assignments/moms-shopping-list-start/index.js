const { title } = require("process");

const myList = document.getElementById("list");

// prevents the submit button form refreshing
document.addItem.addEventListener("submit", function(event) {    
    event.preventDefault();

//Creating the list and div to store the list items
const listItem = addItem.title.value;
var newLi = document.createElement("li");
const newDiv = document.createElement("div");
newDiv.textContent = listItem;
newLi.appendChild(newDiv);

// creating the edit and x/delete button and assigning it to an id
const editButton = document.createElement('button');
editButton.id = "edit";
const xButton = document.createElement("button");
xButton.id = "x";
editButton.textContent = "edit";
xButton.textContent = "x";
title.value = "";
// adds the new buttons and list into the exisiting list
newLi.appendChild(editButton);
newLi.appendChild(xButton);
myList.appendChild(newLi);

})
//takes the xButton and creates the event that allows it to remove a list item
myList.addEventListener("click", function(e) {
    if (e.target.id === "x") {
        console.log(e.target);
        const myList = e.target.parentNode;
        const unordered = myList.parentNode;
        unordered.removeChild(myList);
    }
});

//take the editButton and allows it to be edited
myList.addEventListener("click", function(e) {
    const itemList = document.querySelector("ul div");
    if (e.target.id === "edit") {
        myList.contentEditable = true;
        document.getElementById("edit").textContent = "save";
    }
})