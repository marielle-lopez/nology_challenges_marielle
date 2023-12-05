// calculting moon orbits

function calculateMoonOrbits(numEarthDays) {
  return numEarthDays / 27;
}

let userInput = Number(prompt("Enter number of Earth days: "));
let numOrbits = calculateMoonOrbits(userInput);

console.log(`The moon will orbit the Earth ${numOrbits} times.`);

// circles

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

userInput = Number(prompt("Enter the circle radius: "));
let circleArea = calculateCircleArea(userInput);

console.log(`The area of the circle is ${circleArea} units^2.`);

userInput = Number(prompt("Enter the circle radius: "));
let circumference = calculateCircumference(userInput);

console.log(`The circumference of the circle is ${circumference}.`);

// years to days and seconds

function yearsToDays(numYears) {
  let extraDays = numYears / 4;
  return numYears * 365 + extraDays;
}

function yearsToSeconds(numYears) {
  return numYears * 365 * 24 * 60 * 60;
}

userInput = Number(prompt("Enter your age: "));
let ageToDays = yearsToDays(userInput);
let ageToSeconds = yearsToSeconds(userInput);

console.log(`You're ${ageToDays} days old.`);
console.log(`You're ${ageToSeconds} seconds old.`);

// return the remainder from two numbers

function findRemainder(num1, num2) {
  return num1 % num2;
}

let firstNum = Number(prompt("Enter first number: "));
let secondNum = Number(prompt("Enter second number: "));

let remainder = findRemainder(firstNum, secondNum);

console.log(`The remainder is ${remainder}.`);

// basketball points

function calculateScoreTotal(numOf2Pointers, numOf3Pointers) {
  return 2 * numOf2Pointers + 3 * numOf3Pointers;
}

let numOf2Pointers = Number(prompt("Enter number of 2-pointers: "));
let numOf3Pointers = Number(prompt("Enter number of 3-pointers: "));

let totalPoints = calculateScoreTotal(numOf2Pointers, numOf3Pointers);

console.log(`The total score is ${totalPoints}.`);

// less than 100 challenge

function lessThan100(firstNum, secondNum) {
  if (firstNum + secondNum < 100) {
    return true;
  } else {
    return false;
  }
}

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

console.log(lessThan100(num1, num2));
