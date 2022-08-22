let lazer = document.getElementById("square");

lazer.addEventListener("mouseover", mouseOver);

function mouseOver(){
    console.log(mouseOver);
    lazer.style.backgroundColor = "blue";
}

lazer.addEventListener("mousedown", mouseDown);

function mouseDown(){
    console.log(mouseDown);
    lazer.style.backgroundColor = "red";
}

lazer.addEventListener("mouseup", mouseUp);

function mouseUp(){
    console.log(mouseUp);
    lazer.style.backgroundColor = "yellow";
}

lazer.addEventListener("dblclick", dblClick, false);

function dblClick(){
    console.log(dblClick);
    lazer.style.backgroundColor = "green";
}

lazer.addEventListener("wheel", wheel);

function wheel(){
    console.log(wheel);
    lazer.style.backgroundColor  = "orange";
}


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
