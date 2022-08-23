//Adds a header
const h1 = document.createElement("h1");
var span = document.createElement("span");
h1.textContent = "Javascript made this!!";
document.getElementById("header").appendChild(h1);

//Adds a header2 and then spans it
var h2 = document.createElement("h2");
h2.textContent = "David";
header.append(h2);

span.textContent = (" wrote the JavaScript");
h2.append(span);


//Changes the div text
const topLeft = document.getElementsByClassName("message left")[0];
topLeft.textContent = "The weather is wonderful tonight";

const bottomLeft = document.getElementsByClassName("message left")[1];
bottomLeft.textContent = "The weather all around us";

const topRight = document.getElementsByClassName("message right")[0];
topRight.textContent = "What weather?";

const bottomRight = document.getElementsByClassName("message right")[1];
bottomRight.textContent = "Nope, still don't see anything";


// Clear button that clears the div in the html
document.querySelector("#clear-button").addEventListener("click", function (){
    document.querySelector(".messages").textContent = ("")
});

// Changes background Color
document.querySelector("#theme-drop-down").addEventListener("change", function () {
    const theme = document.querySelector("#theme-drop-down").value;
    document.querySelector("#main").className = ""
    document.querySelector("#main").classList.add(theme)
});
