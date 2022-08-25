const myList = document.getElementById("list");

document.addItem.addEventListener("submit", function(event) {    
    event.preventDefault();


const listItem = addItem.title.value;
var newLi = document.createElement("li");
const newDiv = document.createElement("div");
newDiv.textContent = listItem;
newLi.appendChild(newDiv);


const editButton = document.createElement('button');
editButton.id = "edit";
const xButton = document.createElement("button");
xButton.id = "x";
editButton.textContent = "edit";
xButton.textContent = "x";

newLi.appendChild(editButton);
newLi.appendChild(xButton);
myList.appendChild(newLi);

})

myList.addEventListener("click", function(e) {
    if (e.target.id === "x") {
        console.log(e.target);
        const myList = e.target.parentNode;
        const unordered = myList.parentNode;
        unordered.removeChild(myList);
    }
});

myList.addEventListener("click", function(e) {
    const itemList = document.querySelector("ul div");
    if (e.target.id === "edit") {
        myList.contentEditable = true;
        document.getElementById("edit").textContent = "save";
    }
})