// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them

function oneWordOnly(words){
    const newArr = words.filter((word => {
        if(word.indexOf(" ") === -1) //this does not contain a space
            return word
    }))
    return newArr
}
   
console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]

// try this function with the includes method
   