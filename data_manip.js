// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//Code above copied from codesandbox, anything listed below this comment is my work for the exercise


//Exercise 1
const isDivisible5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ==0;
console.log(`Are the Numbers divisible by 5: ${isDivisible5}`);
//Checking to see if the numbers are divisible by five with modulus. If there was a remainder this would be false

const isGreater = n1>n4;
console.log(`Is n1 greater than n4: ${isGreater}`);
//checking if n1 is more than n4

const arithChain = (((n2-n1)*n3)%n4);
console.log(`What is the result of (((n2-n1)*n3)Modulus n4): ${arithChain}`);
//performing arithmetic needed from exercise

const newUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(`Are all the numbers less than 25: ${newUnder25}`);
const newIsValid = isSum50 && isTwoOdd && newUnder25 && isUnique;
console.log(`Are all my calculations true, therefore is my code valid: ${newIsValid}`);
//changed the greater than to less than and the operation to AND
//if any number is greater than 25, the variable newOver25 would return false
//then switched the isValid to a new variable with ! removed


//Exercise 2

let totalDistance = 1500;
let fuelBudget = 175;
let costPerGallon =3;
let fuelEff55 = 30;
let fuelEff60 = 28;
let fuelEff75 = 23;
//variables declared for road trip exercise

//calculate each question travelling at 55, 60, and 75

//How many gallons of fuel will you need for the entire trip?

let totalFuel55 = Math.round(totalDistance / fuelEff55);
console.log(`Gallons needed going 55mph: ${totalFuel55}`);

let totalFuel60 = Math.round(totalDistance / fuelEff60);
console.log(`Gallons needed going 60mph: ${totalFuel60}`);

let totalFuel75 = Math.round(totalDistance / fuelEff75);
console.log(`Gallons needed going 75mph: ${totalFuel75}`);

//Will your budget be enough to cover the fuel expesnse?

let tripCost55 = Math.round(costPerGallon * totalFuel55);
let budgetPass55 = tripCost55 < fuelBudget;
console.log(`Fuel cost of the trip travelling at 55mph: ${tripCost55}. Do I have the budget:${budgetPass55}`);

let tripCost60 = Math.round(costPerGallon * totalFuel60);
let budgetPass60 = tripCost60 < fuelBudget;
console.log(`Fuel cost of the trip travelling at 60mph: ${tripCost60}. Do I have the budget:${budgetPass60}`);

let tripCost75 = Math.round(costPerGallon * totalFuel75);
let budgetPass75 = tripCost75 < fuelBudget;
console.log(`Fuel cost of the trip travelling at 75mph: ${tripCost75}. Do I have the budget:${budgetPass75}`);

//The output of these calculations show you cannot travel at 75 and make the trip under budget.

//How long will the trip take in hours?

let timeSpeed55 = Math.round(totalDistance /55);
console.log(`Time to destination going 55mph : ${timeSpeed55} hours.`);

let timeSpeed60 = Math.round(totalDistance /60);
console.log(`Time to destination going 60mph : ${timeSpeed60} hours.`);

let timeSpeed75 = Math.round(totalDistance /75);
console.log(`Time to destination going 75mph : ${timeSpeed75} hours.`);

console.log('It makes the most sense to go on the trip at 60 mph. This will allow you to make the best time, but also keep in budget.')

