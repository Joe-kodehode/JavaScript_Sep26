// Loops & Objects recap

// Section 1: Looping through arrays.

const fruitNames = ["Apple", "Banana", "Mango", "Grapes", "Pear", "Kiwi"];

// regular for loop, allows access to start / end / increment
for (let i = 0; i < fruitNames.length; i++) {
  console.log(fruitNames[i]);
}

// for of loop, loops over entire array from start to end
for (let fruit of fruitNames) {
  console.log(fruit);
}

// Section 2: Looping with conditions

const numbers = [12, 5, 8, 3, 44, 130, 22];

for (let number of numbers) {
  // go to the next loop if the number is less than 10
  if (number < 10) {
    continue;
  }

  // end the loop if the number is over 100
  if (number > 100) {
    break;
  }

  console.log(number);
}

// Section 3: The While Loop - Useful when we don't know how many loops are needed

// picking a number and guessing a random number between 1-10 until we guess the correct number.

const ourNumber = 5;
let numOfGuesses = 0;
let randomGuess = 0;

while (randomGuess !== ourNumber) {
  numOfGuesses++;

  randomGuess = Math.floor(Math.random() * 10) + 1;

  console.log(`Guessing ${randomGuess}`);

  if (randomGuess === ourNumber) {
    console.log(
      `Correct! the number was ${ourNumber} it took ${numOfGuesses} guesses to get it right`,
    );
  }
}

// Section 4: Object recap

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
};

console.log(book);
console.log(book.pages); // dot notation
console.log(book["title"]); // bracket notation

// Section 5: Looping through an object using a "for in" loop. And using dynamic keys.

// for of loop, loops over an array, gives access to each element one at a time
// for in loop, lets us loop over an object, gives access to each key, one at a time

const movie = {
  title: "The Matrix",
  genre: "Sci-fi",
  runtime: "3 hours",
};

for (let key in movie) {
  console.log(key); // key holds the name of the key being looped over currently
  console.log(movie[key]); // targets the current key's value
}

// Section 6: Array of Objects

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    countryOfOrigin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    countryOfOrigin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    countryOfOrigin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    countryOfOrigin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    countryOfOrigin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 2.5,
    countryOfOrigin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    countryOfOrigin: "Costa Rica",
  },
];

// Describe each fruit.
// "Pineapple is a Brown fruit from Costa Rica"

for (let fruit of fruits) {
  console.log(
    `${fruit.name} is a ${fruit.color} fruit from ${fruit.countryOfOrigin}`,
  );
}

// Section 7: Find the cheapest fruit in the array

let cheapest = Infinity;

for (let fruit of fruits) {
  if (fruit.pricePerKg < cheapest) {
    cheapest = fruit.pricePerKg;
  }
}

console.log(cheapest);
