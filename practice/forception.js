var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet) {
    let newArray = []
    for (i = 0; i < people.length; i++) {
        newArray.push(people[i] + ':')

        for (j = 0; j < alphabet.length; j++) {
            var betAlpha = alphabet.split("")
            let alphaSet = betAlpha.map(element => {
                return element.toUpperCase();
            });
            newArray.push(upperAlpha[j])
        }
    }
    return newArray
}
console.log(forception(people, alphabet))