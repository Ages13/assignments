//Counting how many times an object is in an array
/*
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

var comp = 0;
for(var i = 0; i < officeItems.length; i++){
    if (officeItems[i].indexOf("computer")>-1){
        comp++;
    }
}
console.log(comp);
*/

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " old enough");
     }
        else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " not old enough");
    }
   
}