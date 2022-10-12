//.map returns: A new array the same size as the input array
// Purpose: allows you to take an array of data and create a new array of data from it

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
/*
const result = arr.map(function(num) { //num in bracket is = arr[i]
    return num + 10
})
 console.log(result); // adds 10 to each number and saves it in result

 // es6 form
 //const result = arr.map(num => + 10)

 const users = [
    { name: "joe" },
    { name: "steve" },
    { name: "lisa" }
]

const result = users.map(function(user){
    return user.name
})
console.log(result) // returns the users in a string


//Practice doubles each number in the array
const newArr = [2, 5, 100]

const result = newArr.map(arr => arr * 2)
  
  console.log(result)

// turns numbers into a string
const newArr = [2, 5, 100];

const arrString = newArr.map(arr => {
    return String(arr)
})
  
  console.log(arrString)

// Caps the first letter of the word
const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capName = names.map(names => names.charAt(0).toUpperCase() + names.substr(1))
console.log(capName);
*/
// pulls the name out of the array and into another array
const names = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
/*
const namesOnly = names.map(function(names){
    return names.name
})
console.log(namesOnly)
*/
// Checks to see if object meet the age requirment to enter the matrix

// function definition 
// functions can take any number parameter
function makeStrings(arr){
    let str = arr.map(function(s){
        if(s.age >= 17) {
            return s.name + 'can go to The Matrix';
        } else if(s.age) {
            return s.name + 'is under age!';
        }
    }) 
    return str;
}

console.log(makeStrings(names))
const newArr  = makeStrings(names)
console.log(newArr)