// Spread Operator passed in arrays / Rest Operator passed in a function 

// add the elements of an existing array into a new array
var certsToAdd = ['Algoritms and Data Structures ', 'Front End Libraries'];
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices',  //...certstoAdd will just add the elments from the array to the new array
'Quality Assurance and Information Security'];
console.log(certifications);

// pass elements of an array as arguements to a function
function addThreeNumbers(x, y, z) {
    console.log(x+y+x)
}
var args = [0, 1, 2];
addThreeNumbers(...args); // ... spread will spread the array out, will output 3 which is the total and what the function is calling

//copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);
console.log(arr); //console log: [1, 2, 3]
console.log(arr2); //console log: [1, 2, 3, 4]
//concatenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// arr1.concat(arr2);
arr1 = [...arr1, ...arr2]; //console log [1, 2, 3, 4, 5]  can also add items in the brackets to add to the array
console.log(arr1);

//Rest: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(elements) {
        return multiplier * elements;
    });
}

var arr = multiply(2, 1, 2, 3); //console log: [2, 4, 6]
console.log(arr)