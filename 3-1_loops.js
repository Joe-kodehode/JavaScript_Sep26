// Loops

// A loop is a way to repeat code without writing it out multiple times.

// D.R.Y. - Don't repeat yourself!

// Section 1 - Why do we use loops?

const names = ["Tom", "Eric", "Jessica", "Juliette", "Harry", "Henry"];

console.log(`hello ${names[0]}`);
console.log(`hello ${names[1]}`);
console.log(`hello ${names[2]}`);
console.log(`hello ${names[3]}`);
console.log(`hello ${names[4]}`);
console.log(`hello ${names[5]}`);

// Section 2 - 'for loop'

// where does the loop start?  index 0
// when does the loop end?     index should always be less than 3
// what changes each loop?     index goes up by 1

for (let i = 0; i < names.length; i++) {
  // code in here runs each loop
  console.log(`hello ${names[i]}`);
}

// We only use i in regular for loops.

// We can go backwards using a for loop.
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// We can increment 5 by more than 1 if we want to.
for (let i = 0; i <= 100; i += 5) {
  console.log(i);
}

// Section 3: Combining Loops with Functions and Methods

function greetEveryone(nameArray) {
  for (let i = 0; i < nameArray.length; i++) {
    const name =
      nameArray[i].trim().charAt(0).toUpperCase() +
      nameArray[i].trim().slice(1).toLowerCase();

    console.log(`Hello, ${name}`);
  }
}

const people = ["alICe", "   bob    ", "chARlIe", "deBBy     "];

greetEveryone(people);
// greetEveryone(names);

// Create a function with a loop inside to combine elements in an array to be a string.

const wordsArr = ["Loops", "are", "really", "useful"];

function makeSentenceWithLoop(stringArray) {
  let sentence = "";

  for (let i = 0; i < stringArray.length; i++) {
    sentence += stringArray[i];
    if (i < stringArray.length - 1) {
      sentence += " ";
    }
  }

  return sentence;
}

console.log(makeSentenceWithLoop(wordsArr));

// Some methods have built-in loops.
console.log(wordsArr.join(" "));

// Section 4: The 'for of' loop

const colors = ["red", "green", "blue"];

// example with for loop, we can change the start, end and increment. We cant change that in a 'for of' loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// A 'for of' loop will loop over an array from the start to the end, hitting each element along the way.
for (let color of colors) {
  console.log(color);
}

// Section 5: The while loop
// We use while loops when we as the dev don't know when the loop will end.

let count = 0;

while (count <= 5) {
  console.log(count);
  count++;
}

// Number guessing game with a while loop

const secretNum = Math.floor(Math.random() * 10) + 1;
let guess = 0;

console.log(`psst, the secret number is: ${secretNum}`);

while (guess !== secretNum) {
  guess++;
  console.log(`Guessing ${guess}`);

  if (guess === secretNum) {
    console.log(`Congratulations! The secret number was: ${guess}`);
  }
}

// Section 6: Create array with a loop.

// Goal: Make a function that generates 10 random numbers between 1-100 and store those 10 numbers in an array.

function makeRandomArray(length, max) {
  const results = [];

  for (let i = 0; i < length; i++) {
    const ranNum = Math.floor(Math.random() * max) + 1; // generate a random number between 1-100

    // conditional to make sure we dont push a number thats already in the array
    if (!results.includes(ranNum)) {
      results.push(ranNum); // pushes that random number into the results array
    }
  }

  return results;
}

console.log(makeRandomArray(10, 10));
console.log(makeRandomArray(50, 75));
console.log(makeRandomArray(5, 10000));

// 1. We dont always want between 1-100 ✅
// 2. We dont always want 10 numbers ✅

// Section 7: Break and Continue

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

for (let name of moreNames) {
  if (name === "Andy") {
    continue; // skips current loop
  }

  if (name === "Ashley") {
    break; // ends the loop
  }

  console.log(name);
}
