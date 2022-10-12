const readline = require("readline-sync");

console.log("Room described")


let gameOver = false;

let keyFound = false;

while (!gameOver) {

    const options = ["Put hand in hole", "Find the key", "Open the door"];

    const index = readline.keyInSelect(options, "What action do you take?");

    switch (index) {
        case 0:
            console.log("A venomous scorpion stings your hand sending you into anaphylactic shock");
            gameOver = true;
            break;
        case 1:
            if (!keyFound) {
                console.log("You begin to rummage around in your pockets and find the key while noticing the pull sign on the door");
            keyFound = true;
            } else {
                console.log("You fail to find any additional keys");
            }
            break;
        case 2:
            if (keyFound){
                console.log("You go to put the key in the door but it does not fit, but you try the door and realize it is not locked");
                gameOver = true
            } else {
                console.log("You begin pushing on the door with all your might!!!");
            }
            break;
        default:
            console.log("Oh, look who got tired of losing");
            gameOver = true;
    }
};

