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
