//.sort \ Returns: The array sorted but sort also mutates the original array, so capturing the returned value is not necessary.
//Purpose: To sort an unsorted array of items. 

const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5]

//orders the list from lowest to highest
arr.sort(function(a, b){        //es6    arr.sort((a, b) => a - b)
    return a - b
})
console.log(arr)  //Output: [1, 3, 5, 6, 6, 22, 34, 44, 64, 234]