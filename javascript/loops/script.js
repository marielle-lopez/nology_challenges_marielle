// create a function with a for loop that adds all the numbers up to given number

function sum(number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
}

console.log(sum(10));

// write the function again with the same inputs and output without using a loop

function newSum(number) {
  let numbers = [...Array(number).keys()];
  numbers.push(number);
  let total = 0;

  numbers.map((item) => (total += item));
  return total;
}

console.log(newSum(10));

// arithmetic sum to complete bonus as well

function arithmeticSum(number) {
  let total = (number / 2) * (1 + number);
  return total;
}

console.log(arithmeticSum(10));
