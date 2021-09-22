// Only change code below this line
var myPet = {

    species: "Cat",
    name: "Lucy",
    legs: 4,
    friends: ["Billy", "Mike"],
}


function myFunction(myObj) {
    return myObj;
}

// Only change code above this line
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };