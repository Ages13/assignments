var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// removes last item in array
vegetables.pop();

// removes first item in array
fruit.shift();

// shows index in which the item is located in the array
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex);

// adds item to the end of array
fruit.push(orangeIndex);
console.log("fruit: ", fruit);

// shows length of the array
let vegs = vegetables.length;
console.log(vegs);

// adds index to the end of the array
vegetables.push(vegs);
console.log("vegetables: ", vegetables);

// combines both arrayies into one
var food = fruit.concat(vegetables);
console.log(food);

// removes items starting from the first number, the second number tells how many to remove starting from the first number
food.splice(4, 2)
console.log(food);

// reverses the order of the array
var foodReversed = food.reverse();
console.log(foodReversed);

// turns the array into a string
var foodJoined = food.join()
console.log(foodJoined);