// Lesson 1: Into to JS

// Single line comment

/*
multi line
comment
*/

// console.log
// The console.log() function prints a message to the console.
console.log("hello world");

// camelCase
// this is when we write the first word's letter in lowercase and subsequent first letters in uppercase. Used for naming Variables and Functions in JS

// Variables and Data Types

// String (text)
let exampleString = "This is a string.";
console.log(exampleString);

// Number (Integer - whole number / float - decimals)
let exampleNumber = 100;
console.log(exampleNumber);

// Boolean (true / false)
let exampleTrueBoolean = true;
let exampleFalseBoolean = false;
console.log(exampleTrueBoolean);
console.log(exampleFalseBoolean);

// Array (a list of values)
let exampleArray = ["The Matrix", "Lord of the Rings", "Love Actually"];
console.log(exampleArray);

// Arrays have Indexes representing the location of the elements in the array
console.log(exampleArray[0]);

// Object (holds key-value pairs)
let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

console.log(person);
console.log(person.isStudent);

// Undefined
let exampleUndefined;
console.log(exampleUndefined);

// Null
let exampleNull = null;
console.log(exampleNull);

// Let & Const
// Use "const" wherever possible. Only use "let" when a variable needs to be reassigned a new value later in the code.
let changeableMessage = "I can change";
changeableMessage = "I've changed!";
console.log(changeableMessage);

const fixedMessage = "I can't change";
// fixedMessage = "This won't end well...";
console.log(fixedMessage);

// Operators
// Operators perform calculations OR comparisons.

// Calculation Operators

const num1 = 12;
const num2 = 5;

console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus (remainders)

// Using + to concatenate strings.
const firstName = "Jane";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

console.log(fullName);

// DRY - Don't repeat yourself!

let counter = 0;

// Increment (number goes up)
// Increment by 1 with ++
counter++;

// Increment by larger numbers
counter = counter + 5;
counter += 5;
console.log(counter);

// Decrement (Number goes down)
counter--;
counter -= 10;
console.log(counter);

// Addition assignment (+=):
let score = 10;
console.log("Initial score:", score);
score += 5; // Equivalent to score = score + 5;
console.log("After adding 5:", score); // 15

// Subtraction assignment (-=):
score -= 3; // Equivalent to score = score - 3;
console.log("After subtracting 3:", score); // 12

// Multiplication assignment (*=):
score *= 2; // Equivalent to score = score * 2;
console.log("After multiplying by 2:", score); // 24

// Division assignment (/=):
score /= 4; // Equivalent to score = score / 4;
console.log("After dividing by 4:", score); // 6

// Remainder assignment (%=):
score %= 5; // Equivalent to score = score % 5;
console.log("After modulus 5:", score); // 6 mod 5 equals 1

// Comparison Operators

// These operators compare values and return a boolean (true / false)

console.log(15 > 15); // Greater than
console.log(15 < 20); // Less than
console.log(15 >= 20); // Greather than or equal to
console.log(15 <= 16); // Less than or equal to

console.log(15 == "15"); // Equal to (not taking into account datatype)
console.log(15 === "15"); // Strictly Equal to (Takes into account datatype)

console.log(15 != "15"); // Not equal to
console.log(15 !== "15"); // Strictly not equal to

// Typeof (check the datatype in a string)
console.log(typeof exampleString);
