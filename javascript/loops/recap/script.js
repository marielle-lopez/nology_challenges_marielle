const pets = ["pixie", "claude", "sebastian", "bug"];

let petsCopy = [...pets];

// -> 1. ['claude', 'sebastian', 'bug', 'pixie']
petsCopy.push(petsCopy.shift());
console.log(petsCopy);

// -> 2. ['pixie', 'bug', 'sebastian', 'claude']
petsCopy.reverse();
console.log(petsCopy);

// -> 3. ['bug', 'sebastian', 'pixie']
petsCopy.pop();
petsCopy.push(petsCopy.shift());
console.log(petsCopy);

// -> 4. ['Bug', 'Sebastian', 'Pixie]
for (let i = 0; i < petsCopy.length; i++) {
  petsCopy[i] = petsCopy[i][0].toUpperCase() + petsCopy[i].substring(1);
}
console.log(petsCopy);

// -> 5. ['Bug', 'Seb', 'Pix']
for (let i = 0; i < petsCopy.length; i++) {
  petsCopy[i] = petsCopy[i].slice(0, 3);
}
console.log(petsCopy);

// generating unique random numbers

let randomNumbers = [];

while (randomNumbers.length < 10) {
  randomNumbers.push(Math.floor(Math.random() * 16));
}

console.log(randomNumbers);

// generateNumbers function

function generateNumbers(n, r, isUnique = false) {
  let nCopy = n;
  let rCopy = r;

  // if n is negative, prompt user to enter a positive integer
  while (nCopy < 0) {
    nCopy = prompt("Please enter a positive number for n: ");
  }

  // if r is negative, prompt user to enter a positive integer
  while (rCopy < 0) {
    rCopy = prompt("Please enter a positive number for r: ");
  }

  while (nCopy > rCopy && isUnique) {
    nCopy = prompt("Please enter a smaller number for n: ");
    rCopy = prompt("Please enter a larger number for r:");
  }

  // empty array to store generated random numbers
  let randomNumbers = [];

  // generate nCopy number of random numbers
  while (randomNumbers.length < nCopy) {
    // initial generated random number
    let generatedNumber = Math.floor(Math.random() * rCopy);

    // if generated numbers have to be unique
    if (isUnique) {
      // if the generated number exists in list
      while (randomNumbers.includes(generatedNumber)) {
        // generate new number
        generatedNumber = Math.floor(Math.random() * rCopy);
      }
    }

    // add generated number to list
    randomNumbers.push(generatedNumber);
  }

  return randomNumbers;
}

let n = prompt("Enter the number of numbers to generate: ");
let r = prompt("Enter the max range: ");

console.log(generateNumbers(n, r, true));

// throw new Error("cannot generate numbers");

// try {
//   console.log(generateNumbers(5, 2, true));
// } catch (e) {
//   console.log(e);
// }
