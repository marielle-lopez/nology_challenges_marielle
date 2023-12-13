// const myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", (e) => ladInAPub(e));

// function ladInAPub(e) {
//   const age = document.getElementById("age").value; // gets user's inputted age

//   if (age < 18) {
//     myButton.className = "red";
//     document.getElementById("bottleImage").src = "./red-bottle.png";
//   } else {
//     myButton.className = "green";
//     document.getElementById("bottleImage").src = "./green-bottle.jpg";
//   }
// }

function allowedInThePub(age) {
  return age >= 18;
}

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission behaviour from browser

  const ageInput = document.querySelector("#ageInput");
  const parsedAge = parseInt(ageInput.value); // turns string into int

  const button = document.querySelector("#ageButton");
  const isAllowedInPub = allowedInThePub(parsedAge);

  // button.classList.remove("red");
  // button.classList.remove("green");

  if (isAllowedInPub) {
    button.className = "green";
    // button.classList.add("green");
  } else {
    button.className = "red";
    // button.classList.add("red");
  }
});
