// Conditionals

// Section 1: If / Else if / Else

const temperature = 15;

// console log "it's a hot day" if the temperature is 25 or over

if (temperature >= 25) {
  console.log("It's a hot day");
} else if (temperature >= 15) {
  console.log("It's a warm day");
} else if (temperature > 0) {
  console.log("It's a bit chilly");
} else {
  console.log("it's freezing!");
}

// Section 2: Logical Operators (AND &&   OR ||)

// Using && to make sure 2 conditions are true
const age = 18;
const hasLicense = false;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else {
  console.log("No driving for you!");
}

// Using || to make sure at least one condition is true
const day = "Hamburger";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday");
} else {
  console.log("Error, unknown day detected!");
}

// Using both && and || in the same check

// Give the user a discount if they have a referral AND it's their first shop.

// Premium members ALWAYS get a discount.

// if they're getting the discount, console.log("You get a discount")
// if they're not getting a discount, console.log("Full price!")

const referal = true;
const firstShop = true;
const premiumMember = false;

if ((referal && firstShop) || premiumMember) {
  console.log("You get a discount");
} else {
  console.log("No discount!");
}

// Section 3: Ternary

const isMember = false;
// let fee;

// if (isMember) {
//   fee = "$5";
// } else {
//   fee = "$10";
// }

const fee = isMember ? "$5" : "$10";

console.log(fee);

// Section 4: Switch Statements

const fruit = "Kiwi";

switch (fruit) {
  case "Apple":
    console.log("The fruit is an apple");
    break;
  case "Banana":
    console.log("The fruit is a banana");
    break;
  case "Strawberry":
    console.log("The fruit is strawberry");
    break;
  default:
    console.log("Unknown fruit!");
}

// Use if / else if → for complex or varied conditions
// Use switch → for one variable with many fixed values

// Section 5: Truthy and Falsey values

const value = "";

if (value) {
  console.log("This is true!");
} else {
  console.log("This is false!");
}

// True
// A string with value
// A positive number
// A negative number
// An array with values
// An empty array
// An object with key value pairs
// An empty object

// False
// Empty string
// 0
// Undefined
// Null
// NaN (not a number)

// Section 6: Template String / Template Literal

const firstName = "Bob";
const lastName = "Builderson";
const city = "Oslo";
const country = "Norway";

// const greeting =
//   "Welcome" +
//   " " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "from" +
//   " " +
//   city +
//   " " +
//   country +
//   " " +
//   "to my website.";

// 1. Swap quotations for backticks
// 2. surround variables with ${}

const greeting = `Welcome ${firstName} ${lastName} from ${city} ${country} to my website`;

console.log(greeting);
