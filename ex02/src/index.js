// Only change code below this line
var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse",
}
function myFunction(myObj) {
    var hatValue = myObj.hat;
    var shirtValue = myObj.shirt;
    var shoesValue = myObj.shoes;
    return { hatValue, shirtValue, shoesValue };
}

// Only change code above this line
console.log(myFunction(myClothes));
module.exports = myFunction(myClothes);