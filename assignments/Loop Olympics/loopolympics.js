/*
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


for( var i = 0; i < number.length; i++){
    console.log(number[i]);
}
*/

/*
//this will reverse the array, so instead of 0,1,2 it will be 9,8,7
const reversed = number.reverse();
console.log(reversed);
*/

/*
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for (var i = 0; i < fruit.length; i++){
    console.log(fruit);
}
*/

/*
// pushs numbers into an array
var numbers = []

numbers.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(numbers);
*/

/*
// prints only the even numbers
for (var x=0; x<=100; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
}
*/

/*
// returns every other item
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

let x = fruit.filter((element, index) => {
    return index % 2 === 0;
})
console.log(x)
*/

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
 // prints only the names
/* 
for (var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}
*/
// This pulls data from one array and sorts it into two other arrays 
var names = []
var occupations = []

for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
}
for (var i = 0; i < peopleArray.length; i++) {
    occupations.push(peopleArray[i].occupation);
}
console.log(names, occupations);


