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
  petsCopy[i] = petsCopy[i].charAt(0).toUpperCase() + petsCopy[i].substring(1);
}
console.log(petsCopy);

// -> 5. ['Bug', 'Seb', 'Pix']
for (let i = 0; i < petsCopy.length; i++) {
  petsCopy[i] = petsCopy[i].slice(0, 3);
}
console.log(petsCopy);
