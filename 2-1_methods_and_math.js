// Methods (built-in functions)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it. Some methods alter the original piece of data, others don't alter the original!

// Section 1.0: String Methods

const text = "   Hello, JavaScript World World!   ";

console.log(text.trim()); // removes whitespace before and after a string. Doesn't change the original.
console.log(text.toUpperCase()); // converts all text to uppercase.
console.log(text.toLowerCase()); // converts all text to lowercase.
console.log(text.indexOf("JavaScript")); // return the starting index of the first instance of the passed in text.
console.log(text.slice(4, 9)); // slices out a section of text. We pass in the starting index (included in the slice) and end index (not included in the slice.) Does not alter the original.
console.log(text.replace("World", "Universe")); // replaces the first instance of the passed in string.
console.log(text.replaceAll("World", "Universe")); // replaces ALL instances of the passed in string.
console.log(text.charCodeAt(4)); // returns the unicode number for the character at the given index.
console.log(text.repeat(3)); // Repeats the string 3 times

console.log(text.length); // returns the amount of characters (including whitespace) in the string.

// Section 1.1: Converting a string into an Array
console.log(text.split(" ")); // Splits our string into an array with a new element each time we hit a space.

// Section 1.2: Converting a string into a Number
const numString = "123.45xyz";

console.log(Number(numString)); // Converts a string into a number. returns NaN (not a number) if any part is invalid.
console.log(parseInt(numString)); // Converts a string into a whole number, removes any invalid parts.
console.log(parseFloat(numString)); // Converts a string into a number (including decimals), removes any invalid parts.

// Section 2: Array Methods

const colors = ["Red", "Green", "Blue"];

console.log(colors.length); // returns a number with how many elements in the array.
colors.push("Yellow"); // push adds elements to the END of our array
console.log(colors);
colors.unshift("Purple"); // unshift adds elements to the START of our array
console.log(colors);
colors.pop(); // pop removes the last element from the array - can be stored in a new variable if we want to.
console.log(colors);
colors.shift(); // shift removes the first element from the array - can be stored in a new variable if we want to.
console.log(colors);

console.log(colors.includes("Red")); // Checks if the passed in value is in the array or not.Returns true or false.

const newColors = colors.toSpliced(1, 2, "Brown", "Pink"); // Replaces elements with new elements.
// Syntax: .toSpliced(index, amount, new element(s))
// Does not affect the original array, can be stored in a new variable.
console.log(newColors);
console.log(colors);
colors.splice(0, 2, "Orange", "Chartruse"); // same as toSpliced but affects the original array!
console.log(colors);

const unsortedArray = [3, 1, 4, 1, 5, 9, 6];

const sortedArray = unsortedArray.toSorted(); // Creates a new array from the old array with the numbers sorted.
console.log(sortedArray);

unsortedArray.sort(); // Same as toSorted but affects the original array.
console.log(unsortedArray);

console.log(sortedArray[4]); // returns the element at index 4
console.log(sortedArray.at(4)); // returns the element at index 4
console.log(sortedArray.at(-2)); // returns the element 2 from the end

const reversedArray = sortedArray.toReversed(); // Makes a new array witht the original reversed.
console.log(reversedArray);

sortedArray.reverse(); // same as toReversed, but alters the original.
console.log(sortedArray);

// Section 2.1: Converting an Array into a String

console.log(colors);
console.log(colors.join(" ")); // converts an array into a string with the passed in value appearing between each word

// Section 3: Number Methods

const myNum = 3.497945357;

console.log(myNum.toFixed(2)); // returns the number rounded to the nearest 2 decimals as a string
console.log(myNum.toExponential()); // returns a string with myNum in exponential notation

// Section 3.1: Converting a number into a string
console.log(myNum.toString());

// Section 4: Chaining methods together

const rawString = "     JavaScript is fun!    ";

// Remove whitespace from start and end
// Make it all uppercase
// swap the word "fun" for "awesome"

const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();

console.log(processedString);

// convert our array into a string, all lowercase
const words = ["HeLLo", "wOrLD"];

const fixedWords = words.join(" ").toLowerCase();
console.log(fixedWords);

// round a number to the nearest 2 decimal points, turn it into a string and repeat it twice

const exampleNum = 45.034580348;

const convertedNum = exampleNum.toFixed(2).repeat(2);

console.log(convertedNum);

// Bonus - Math

console.log(Math.round(123.56)); // rounds to nearest whole number (Integer)

console.log(Math.ceil(123.45)); // rounds up

console.log(Math.floor(123.99)); // rounds down

// Math.random()

console.log(Math.random()); // gives us a number between 0.00000 - 0.99999

// We want a random number between 0-9
console.log(Math.floor(Math.random() * 10));

// We want a random number between 1-10
console.log(Math.floor(Math.random() * 10) + 1);

// We want a random number between 0-100
console.log(Math.floor(Math.random() * 101));

// We want a random number between 1-100
console.log(Math.floor(Math.random() * 100) + 1);

const randomNum = Math.floor(Math.random() * 10) + 1;

console.log(randomNum);

// Console log, but Exclude 6
if (randomNum <= 5 || randomNum >= 7) {
  console.log("the number is between 1-5 or 7-10");
}

// Select a random pokemon
const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
];

const ranIndex = Math.floor(Math.random() * 10);

console.log(pokemon[ranIndex]);

// removing or adding elements to the array
const pokemon2 = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "dugtrio",
  "mewtwo",
  "alakazam",
];

// Dynamic
const ranIndex2 = Math.floor(Math.random() * pokemon2.length);

console.log(pokemon2[ranIndex2]);
