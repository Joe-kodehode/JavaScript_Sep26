// Objects

// Section 1: What is an Object?

// An object is a data-type that stores related data using key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};

console.log(person);
console.log(person.name); // access with dot notation
console.log(person["job"]); // access with bracket notation

// Dot vs bracket:
// - Use dot when you know the key name at code time: person.name
// - Use brackets when the key is dynamic or not a valid identifier: person[key]

// Section 2: Creating, Modifying and Deleting keys/values

person.hasLicence = true; // create a new key-value pair
person.job = "CEO"; // modify existing value
delete person.job; // deletes a key from the object

console.log(person);

// Section 3: Looping through an object using 'for in' loop

// for of = looping over arrays
// for in = looping over objects

const user = {
  name: "Joe",
  age: 38,
  location: "Stavanger",
  hobby: "gaming",
};

for (let key in user) {
  console.log(key); // key gives us the current key being looped over
  console.log(user[key]); // user[key] gives us the current value being looped over
}

// Dynamic key access is useful when you don’t know the property name in advance, like when looping through an object or handling user input.

// Section 4: Nested Objects and Arrays

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isMember: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
};

// target the entire object
console.log(userData);

console.log(userData.lastName);
console.log(userData.hobbies);
console.log(userData.hobbies[1]);
console.log(userData.address.postCode);

// Section 5: Array of Objects // Object Array

const products = [
  { productName: "Shirt", productId: 5, stock: 32 },
  { productName: "Pants", productId: 6, stock: 5 },
  { productName: "Socks", productId: 10, stock: 22 },
];

console.log(products[0].productName);

// Loop over the products array
// in each loop, console.log a description of the product
// loop 1 should console log: "Shirt is id 5 and has 32 in stock"
// loop 2 should console log: "Pants is id 6 and has 5 in stock"
// loop 3 should console log: "Socks is id 10 and has 22 in stock"

// Break + mini-task until 13:20

for (let product of products) {
  console.log(
    `${product.productName} is id ${product.productId} and has ${product.stock} in stock`,
  );
}

// Section 6: More Object Array targeting

const people = [
  {
    name: "Thomas",
    isMember: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMember: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMember: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMember: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    isMember: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    isMember: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    isMember: false,
    age: 30,
    hobbies: ["makeup"],
  },
  {
    name: "Cathy",
    isMember: false,
    age: 18,
    hobbies: ["design", "drawing", "css", "fashion", "shopping"],
  },
];

// Write a loop to loop over our people array
// each loop, console.log a string about the person.
// "Cathy is 18 years old, is not a member of our kundeklubb and enjoys design"

for (let person of people) {
  const member = person.isMember ? "" : " not"; // checks membership and adds " not" if not a member
  const ranIndex = Math.floor(Math.random() * person.hobbies.length); // generates a random index based on how long their hobby array is

  console.log(
    `${person.name} is ${person.age} years old, is${member} a member of our kundeklubb and enjoys ${person.hobbies[ranIndex]}`,
  );
}
