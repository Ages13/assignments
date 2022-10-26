
//Creates the hover color change
let lazer = document.getElementById("square");

lazer.addEventListener("mouseover", mouseOver);

function mouseOver(){
    console.log(mouseOver);
    lazer.style.backgroundColor = "blue";
}
//Creates the mouse click down color change
lazer.addEventListener("mousedown", mouseDown);

function mouseDown(){
    console.log(mouseDown);
    lazer.style.backgroundColor = "red";
}
//Creates the mouse up color change
lazer.addEventListener("mouseup", mouseUp);

function mouseUp(){
    console.log(mouseUp);
    lazer.style.backgroundColor = "yellow";
}
//Creates the double click color change
lazer.addEventListener("dblclick", dblClick, false);

function dblClick(){
    console.log(dblClick);
    lazer.style.backgroundColor = "green";
}
//Creates the scroll wheel color change..  Depending how much room is on the page, the scroll needs more room to work, so wheel was used
lazer.addEventListener("wheel", wheel);

function wheel(){
    console.log(wheel);
    lazer.style.backgroundColor  = "orange";
}

//Allows the colors to be changed with the first letter of the color
lazer.addEventListener("keydown", keyDown); 

function keyDown() {
    switch (event.keyCode) {
        case 66:
            setBackgroundColor("blue");
            break;
        case 82:
            setBackgroundColor("red");
            break;
        case 89:
            setBackgroundColor("yellow");
            break;
        case 71:
            setBackgroundColor("green");
            break;
        case 79:
            setBackgroundColor("orange");
            break;
    }

};

function setBackgroundColor(color) {
  lazer.querySelector('body')
    lazer.style.backgroundColor = color;
}
