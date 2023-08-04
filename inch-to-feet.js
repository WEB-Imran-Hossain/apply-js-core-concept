// Inch to Feet
var myInches = 12;
var myFeet = myInches / 12;
console.log(myFeet);

var vollyBallPlayerFeet = 7;
var feetToInch = myInches * vollyBallPlayerFeet;
console.log(feetToInch);

var  jimHeight = feetToInch / myInches;
console.log(jimHeight);


// using function this task
function inchToFeet(inches) {
   const feet = inches / 12;
   return feet;
}

// call the function
const vollyBallPlayerInches = 84;
const jimHeight = inchToFeet(vollyBallPlayerInches);
console.log(jimHeight);
