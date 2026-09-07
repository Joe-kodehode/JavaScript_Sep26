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

// Section 3: Number Methods
