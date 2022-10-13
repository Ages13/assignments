// ForEach, find, Findindex

//.forEach \ returns: undefined
//Purpose: Used in place of a for-loop\Caveat: For-loops allow you to customize where the loop starts, stops, and increments by. forEach will always loop the entire length of the array

//.find \ returns: The first item it finds in the array that matches your criteria
//Purpose: Finding an item in an array

//.findIndex() \ returns: The index number of the first item it finds in the array that matches your criteria
//Purpose: Finding the index number of an item in any array

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

//.forEach \ won't assign a var to it
//const newArr = []

//arr.forEach(num => num % 2 === 0 && newArr.push(num))

//.find() finds info you listed and pushes it into a new array
/*
const result = users.find(function(user){
    if(user.name === "julie"){
        return user
    }
}
*/

//.findIndex() shows what index the item is in the array
const userIndex = users.findIndex(function(user){
    if(user.name === "rick"){
        return true
    }
})