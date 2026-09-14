// Functions, Methods and Math recap

// Section 1: Check if an item is in an array (function, methods, ternary)

const shoppingList = ["milk", "bread", "cheese", "catfood"];
const gameList = [
  "Mario Kart",
  "Elden Ring",
  "Cyberpunk 2077",
  "My little pony, island adventure",
];

// const checkItem = (item, array) => {
//   if (array.includes(item)) {
//     return `${item} is in the array`;
//   } else {
//     return `${item} is not in the array`;
//   }
// };

const checkItem = (item, array) =>
  `${item} is${array.includes(item) ? "" : " not"} in the array`;

console.log(checkItem("milk", shoppingList));
console.log(checkItem("cheese", shoppingList));
console.log(checkItem("left sock", shoppingList));
console.log(checkItem("Mario Kart", gameList));
console.log(checkItem("Gears of War", gameList));

// 1. make it a ternary instead of if/else ✅
// 2. make it so we can check a different array too ✅

// Section 2: Convert a Sentence into Kebab-Case

const toKebabCase = (string) => string.replaceAll(" ", "-");

console.log(toKebabCase("my name is joe"));
console.log(toKebabCase("one two three four five"));

// Section 3: Check if a word is a palindrome

// For practice, try turning this into an arrow function with implied return & change the if/else to a ternary.
function isPalindrome(word) {
  if (word === word.split("").reverse().join("")) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }
}

console.log(isPalindrome("racecar")); // racecar is a palindrome
console.log(isPalindrome("apple")); // apple is not a palindrome
console.log(isPalindrome("kayak"));
console.log(isPalindrome("level"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("coffee"));

// Section 4: Check the length of a string and add "..." if it's too long

function shorten(string, maxLength) {
  if (string.length >= maxLength) {
    return string.slice(0, maxLength + 1) + "...";
  } else {
    return string;
  }
}

// Same but as an arrow function
// const shorten = (string, maxLength) => {
//     if (string.length >= maxLength) {
//     return string.slice(0, maxLength + 1) + "...";
//   } else {
//     return string;
//   }
// }

console.log(shorten("This string is quite long and could use shortening", 15));

console.log(shorten("I'm short", 10));

// Section 5: Math random recap

const movieArray = [
  "The Matrix",
  "Lord of the Rings",
  "Star Wars",
  "Flåklypa Grand Prix",
  "Bladerunner",
  "Titanic",
];

// random number between 0 - length of array
const randomIndex = Math.floor(Math.random() * movieArray.length);

console.log(randomIndex);

const randomMovie = movieArray[randomIndex];

console.log(randomMovie);

// Section 6: Rock, paper, scissors game (function, switch case, math random)

const rockPaperScissors = (userInput, aiInput) => {
  switch (userInput + aiInput) {
    case "rock" + "scissors":
    case "scissors" + "paper":
    case "paper" + "rock":
      return "AI 1 wins";
    case "scissors" + "rock":
    case "paper" + "scissors":
    case "rock" + "paper":
      return "AI 2 wins";
    case "scissors" + "scissors":
    case "paper" + "paper":
    case "rock" + "rock":
      return "Draw";

    default:
      return "Error";
  }
};

const answerArr = ["rock", "paper", "scissors"];

const ranIndex1 = Math.floor(Math.random() * 3);
const ranIndex2 = Math.floor(Math.random() * 3);

const aiAnswer1 = answerArr[ranIndex1];
const aiAnswer2 = answerArr[ranIndex2];

console.log(aiAnswer1);
console.log(aiAnswer2);

console.log(rockPaperScissors(aiAnswer1, aiAnswer2));
