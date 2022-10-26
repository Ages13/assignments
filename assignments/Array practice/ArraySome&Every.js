//.some() \ Returns: Returns true if at least one item in the array matches your criteria, false otherwise
//Purpose: To see if something exists in an array

//.every() \ Returns true if EVERY item in the array matches your criteria, false otherwise.
//Purpose: TO see if Everything in an array matches your criteria

const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

//.some() returns true since "Steve" starts with S
const result = names.some(function(name){               const result = names.some(name => name[0] === "S")
    if(name[0] === "S"){
        return true
    }
})

//.every() returns false since "Steve" does not start with "J"
const result =names.every(function(name){                const result = names.every(name => name[0] === "J")
    if(name[0] === "J"){
        return true
    }
})