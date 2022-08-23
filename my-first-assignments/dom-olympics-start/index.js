const h1 = document.createElement("h1");
var span = document.createElement("span");
h1.textContent = "Javascript made this!!";
document.getElementById("header").appendChild(h1);


var h2 = document.createElement("h2");
h2.textContent = "David";
header.append(h2);

span.textContent = (" wrote the JavaScript");
h2.append(span);



const topLeft = document.getElementsByClassName("message left")[0];
topLeft.textContent = "The weather is wonderful tonight";

const bottomLeft = document.getElementsByClassName("message left")[1];
bottomLeft.textContent = "The weather all around us";

const topRight = document.getElementsByClassName("message right")[0];
topRight.textContent = "What weather?";

const bottomRight = document.getElementsByClassName("message right")[1];
bottomRight.textContent = "Nope, still don't see anything";



var clearButton = document.getElementById("clear-button");
var messages = document.getElementsByClassName("messages");
clearButton.addEventListener("click", onClick);
function onClick() {
   messages.textContent = "";
   console.log(messages);
    }

