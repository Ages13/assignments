//.reduce() \ Returns: Whatever you want it to
//Purpose: Take an array of data and Reduce it into a smaller different data set\

//1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result1 = nums.reduce(function(final, current){   // reduce needs two arguements (final, current). Final is what is creating when reduced. Current is the item that is looped, like a normal funciton
    final += current  // es6 form
        return final
    
})
console.log(result1) // output: 55 \ is the sum of all the numbers added up


// 2 - reduce the users to an array of strings of the user's first and last names
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

const result = users.reduce(function(final, user){
    
})


// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]