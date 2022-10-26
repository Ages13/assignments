/*
//TASK 1 Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals(...animals) {
    console.log(...animals);
}
console.log(collectAnimals);
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//TASK 2 Write a function that returns a food object with the array names as properties using Object Literals:
const combineFruit = (fruit, sweets, vegetables) => { 
    return {fruit, sweets, vegetables} 

}
//assigns arrays to fruit, sweets, vegetables
console.log(combineFruit(["apple", "pear",],
["cake", "pie"], ["carrot"]));

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])

//TASK 3: Use destructuring to use the property names as variables. Destructure the object in the parameter:
parse = parseSentence =>  `We're going to have a good time in ${location} for ${duration}`
  
  
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  });

console.log(location);
console.log(duration);
console.log(parse());

//TASK 4: Use array destructuring to make this code ES6:
const returnFirst = (items) =>
    firstItem = items[0]; //change this line to be es6
    // return firstItem 
 
//Task 5: Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = (arr) => {
    const [firstFav, secondFav, thirdFav, fourthFav] = favoriteActivities
    return `My top three favorite activities are, ${firstFav},${secondFav}, ${thirdFav}, and ${fourthFav}`
}
console.log(returnFavorites(favoriteActivities))

//TASK 6:Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
function combineAnimals() {

}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
const allAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]; // using the spread operator to combine arrays
// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(allAnimals);
*/
//TASK 6: Try to make the following function more ES6y:
let product = (a, b, c, d, e) => {
  numbers = [a,b,c,d,e];

  return numbers.reduce((acc, number) {
    return acc * number;
  }, 1)
}
