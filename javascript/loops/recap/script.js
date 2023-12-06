const pets = ["pixie", "claude", "sebastian", "bug"];

let petsCopy = [...pets];

petsCopy.push(petsCopy.shift());
console.log(petsCopy);

petsCopy.reverse();
console.log(petsCopy);

petsCopy.pop();
petsCopy.push(petsCopy.shift());
console.log(petsCopy);

for (let i = 0; i < petsCopy.length; i++) {
  petsCopy[i] = petsCopy[i].charAt(0).toUpperCase() + petsCopy[i].substring(1);
}
console.log(petsCopy);

for (let i = 0; i < petsCopy.length; i++) {
  petsCopy[i] = petsCopy[i].slice(0, 3);
}

console.log(petsCopy);
