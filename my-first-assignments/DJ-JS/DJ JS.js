let squarebutton = document.getElementById("square");

squarebutton.addEventListener("mouseover", mouseOver);

function mouseOver(){
    console.log(mouseOver);
    squarebutton.style.backgroundColor = "blue";
}

squarebutton.addEventListener("mousedown", mouseDown);

function mouseDown(){
    console.log(mouseDown);
    squarebutton.style.backgroundColor = "red";
}

squarebutton.addEventListener("mouseup", mouseUp);

function mouseUp(){
    console.log(mouseUp);
    squarebutton.style.backgroundColor = "yellow";
}

squarebutton.addEventListener("dblclick", dblClick, false);

function dblClick(){
    console.log(dblClick);
    squarebutton.style.backgroundColor = "green";
}

squarebutton.addEventListener("wheel", wheel);

function wheel(){
    console.log(wheel);
    squarebutton.style.backgroundColor  = "orange";
}


squarebutton.addEventListener("keydown", keyDown); 

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
  squarebutton.querySelector('body')
    squarebutton.style.backgroundColor = color;
}
