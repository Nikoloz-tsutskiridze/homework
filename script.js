for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // For numbers divisible by both 3 and 5
  } else if (i % 3 === 0) {
    console.log("Fizz"); // For numbers divisible by 3
  } else if (i % 5 === 0) {
    console.log("Buzz"); // For numbers divisible by 5
  } else {
    console.log(i); // For all other numbers
  }
}

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

let yourName;
do {
  yourName = prompt("Who are you?"); // Prompt the user for their name
} while (!yourName); // Continue looping if the name is empty or null (falsy)
console.log("Hello " + yourName); // Greet the user with their name

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) {
    output += "buzz";
  }
  if (i % 5 === 0) {
    output += "fuzz";
  }
  console.log(output || i);
}

let size = 5;
let board = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
