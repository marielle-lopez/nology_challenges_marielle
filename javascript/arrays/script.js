// create an array
let hobbies = ["Dancing", "Gaming", "Gym"];

// print first item
console.log(hobbies[0]);

// remove first hobby and store it in a variable
let firstHobby = hobbies.shift();

// store length of array in a variable
let arrLength = hobbies.length;

// add another hobby to the end of the array
hobbies.push("Escape Rooms with Friends");

// print the last hobby
console.log(hobbies[hobbies.length - 1]);

// bonus
console.log(`My hobbies are: ${hobbies.join(", ")}`);

// create an array with 5 grocery items
let groceryItems = [
  "Ramen",
  "Mango",
  "Lemon Iced Tea",
  "Protein Bar",
  "Granola",
];

// print the output pipe delimited
console.log(groceryItems.join("|"));
