var bluebutton = document.getElementById("blue");
var redbutton = document.getElementById("red");
var yellowbutton = document.getElementById("yellow");
var greenbutton = document.getElementById("green");
var orangebutton = document.getElementById("orange");

bluebutton.addEventListener("mouseover", func, false);
bluebutton.addEventListener("mouseout", func1, false);

function func() {
    bluebutton.setAttribute("style", "background-color:blue;")
}

function func1(){
    bluebutton.setAttribute("style", "background-color:white;")

}

