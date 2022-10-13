// .filter returns: A new array with only the filtered out items from the original array
//Purpose: Reducing a data set into a sub-data set. Ex: Initial array has all movies (action, fantasy, horror ) you could use 
// to return an array with only the action movies

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = arr.filter(function(num){
    if(num % 2 === 0) {
        return num 
    }
})
console.log(result)

//es6 form
// const result = arr.filter(num => num % 2 === 0)
/*
const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

const actionMovies = movies.filter(function(movie){
    if(movie.genre === "action"){
        return movie
    }
})
console.log(actionMovies)

// es6 form
 const actionMovies = movies.filter(movie.genre === "action")
console.log(actionMovies)

// practice 


const numbers = [3, 6, 8, 2];

const filter = numbers.filter((num) => num > 5);

console.log(filter)


const filter = numbers.filter((num) => num % 2 === 0);
console.log(filter)

const random = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveCharacters = random.filter((ran) => ran.length <= 5);
console.log(fiveCharacters);

//filter out names that don't belong in club

const peopleWhoBelongToTheIlluminati = [
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]

const club = peopleWhoBelongToTheIlluminati.filter((arr) => arr.member === true);
console.log(club);

const peopleWhoBelongToTheIlluminati = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const ageR = peopleWhoBelongToTheIlluminati.filter((arr) => arr.age >= 18);
console.log(ageR); */