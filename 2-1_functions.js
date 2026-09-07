// Functions

// A function is a block of code that only runs when we "call it". It won't run when the page loads. Functions are reusable and dynamic code.

// Section 1 - Function declarations and hoisting
function sayHello() {
  console.log("Hello");
}

sayHello();
// Function call - can be called as many times as we want

// Section 2 - Arrow Functions

const helloArrow = () => {
  console.log("Hello from the arrow function");
};

helloArrow();

// Hoisting - Regular functions are "hoisted" to the top when our JS runs. Meaning we can call them before we create them. This is not the case for arrow functions.

// Section 3 - Return statement and Scope

function logMessage() {
  console.log(
    "This function logs this message from inside the function when it's called. The function is not retuning any data",
  );
}

logMessage();

// The return keyword lets us send data from inside our function to outside our function. The data will be sent to and will replace the function call.

// As soon as we run the 'return' we exit the function, so code below a return will not run.
function returnMessage() {
  const myMessage = "This string is being returned from the function";
  return myMessage;
}

console.log(returnMessage());

// Scope example
// Variables created inside functions are only accessable inside that function. Global variables are still accessable anywhere.
const aNumber = 1;

function scopeExample() {
  const anotherNumber = 2;
  console.log(aNumber);
  console.log(anotherNumber);
}

scopeExample();

// Section 4 - Parameters() and Arguments()

// Example 1 - Hard coding

function add() {
  return 3 + 4;
}

console.log(add());

// Example 2 - Soft coding / Dynamic

function minus(num1, num2) {
  return num1 - num2;
}

console.log(minus(10, 5));
console.log(minus(60, 30));

// Example 3 - Soft coded with template string
const greeter = (time, name) => {
  return `Good ${time} ${name}`;
};

console.log(greeter("evening", "Joe"));
console.log(greeter("morning", "Celina"));
console.log(greeter("night", "Bill"));

// Section 5 - Implicit Return in Arrow Functions
// If we're instantly returning a piece of data from an arrow function, we can delete the {} and return keyword.
const greeter2 = (time, name) => `Good ${time} ${name}`;

console.log(greeter2("afternoon", "Harry"));

// Section 6 - Calculator function with Switch conditional

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Error, invalid operator";
  }
}

// 1. You said we cant have more than 1 return
// 2. Why aren't we using break?

console.log(calculator(10, 50, "+"));
console.log(calculator(40, 50, "+"));
console.log(calculator(30, 20, "-"));
console.log(calculator(30, 20, "*"));
console.log(calculator(30, 20, "/"));

// Section 7 - Update a global variable using a function.

// Update a player's health in a game.

let hp = 100;

const updateHp = (amount, direction) => {
  if (direction === "up") {
    hp += amount;
    if (hp > 200) {
      hp = 200;
    }
  } else if (direction === "down") {
    hp -= amount;
    if (hp <= 0) {
      console.log("You died");
      hp = 100;
    }
  } else {
    console.log("An error has occured");
  }
};

updateHp(10, "up"); // pickup small healthpack
updateHp(50, "up"); // pickup large healthpack
updateHp(100, "down"); // Big damage
updateHp(50, "up"); // pickup large healthpack
updateHp(50, "up"); // pickup large healthpack
updateHp(50, "up"); // pickup large healthpack
updateHp(50, "up"); // pickup large healthpack
updateHp(1000, "down"); // fell off a cliff

// 1. it shouldnt always be 10 ✅
// 2. it shouldnt always go up ✅
// 3. If the player's hp would go above 200, set it to 200 ✅
// 4. If hp goes to 0 or below, console.log("You died") and reset hp to 100 ready for the next game. ✅

console.log(hp);

// Section 8 - Use Template Literals and Ternary in a Function

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];

const checkFruits = (fruit) => {
  //   if (fruits.includes(fruit)) {
  //     return `${fruit} is in the array`;
  //   } else {
  //     return `${fruit} is not in the array`;
  //   }

  return `The array does${fruits.includes(fruit) ? "" : "'t"} include ${fruit}`;
};

console.log(checkFruits("Apple"));
console.log(checkFruits("Pear"));
console.log(checkFruits("Hamburger"));

// Bonus

// Scenario: Ordering shirts.

// The user should be able to decide the color when they order.

function orderShirt(shirtColor, amount) {
  if (amount === 1) {
    return `You have ordered a ${shirtColor} shirt`;
  } else if (amount > 1) {
    return `You have ordered ${amount} ${shirtColor} shirts!`;
  }
}

console.log(orderShirt("green", 5));
console.log(orderShirt("blue", 10));
console.log(orderShirt("red", 1));

// Creating a function to track our ingame score

let score = 0;

function updateScore(direction, amount) {
  if (direction === "up") {
    score += amount;
    if (score >= 2000) {
      console.log("You win the game!");
      score = 0;
    }
  } else if (direction === "down") {
    score -= amount;
  }
}

updateScore("up", 100);
updateScore("up", 1000);
updateScore("down", 200);

console.log("Your score is:", score);

// Calculate a total price

const totalPrice = (amount, price) => `Your total price is ${amount * price}kr`;

console.log(totalPrice(5, 100));
console.log(totalPrice(10, 10));
