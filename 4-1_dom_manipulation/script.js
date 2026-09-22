// DOM Manipulation

// Section 1: What is the DOM?

// The DOM is how JavaScript interacts with HTML on a web page.

// Document Object Model Manipulation
// HTML Object changing

// DOM Maniplulation turns your HTML into a structure of objects you can access and change using JS.

// Section 2: Targeting existing HTML Elements using JavaScript

const heading = document.querySelector("h1"); // targets the h1
console.log(heading);

// const button = document.getElementById("my-button");
const button = document.querySelector("#my-button");
console.log(button);

const items = document.querySelectorAll(".list-item");
console.log(items);

const listItems = document.getElementsByClassName("list-item");
console.log(listItems);

const secondHeading = document.querySelector("h2");

const list = document.querySelector("ul");

// Section 3: Changing text or html content

// textContent sets or gets the plain text inside an element (not the html tags)
heading.textContent = "Welcome to the DOM lesson!";

// innerHTML sets or gets the HTML inside an element (includes tags)
heading.innerHTML = "<span style='color: red'>DOM</span> Manipulation";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// Section 4: Changing Styles

heading.style.fontSize = "50px";
heading.style.color = "blue";
heading.style.textTransform = "uppercase";

// Section 5: Adding and Removing classes
button.classList.add("blue-button");
button.classList.remove("blue-button");

// Toggle will add the class if it's not there OR remove the class if it is there.
secondHeading.classList.toggle("big-text");

document.body.classList.toggle("dark-mode");
document.body.classList.toggle("dark-mode");

// Section 6: Creating new elements and adding them to our page.

// Step 1: Create the element
// Step 2: Add content/class/attributes to the element
// Step 3: Put the element on our page

// Create a new <p> element
const newParagraph = document.createElement("p");

// Give our new p element some textContent and a class
newParagraph.textContent = "I was created in JS!";
newParagraph.classList.add("big-text");

// Add it to our page using append
document.body.append(newParagraph);

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// Creating a new image and giving it attributes
const newImage = document.createElement("img");

// Set the src
// newImage.setAttribute("src", "./images/puppy.jpg");
newImage.src = "./images/puppy.jpg";
// Set the alt
newImage.alt = "A cute puppy running through a field";
// Give a css class
newImage.classList.add("small-img");

// Append to the page
document.body.append(newImage);

// Prepend to put an element at the top
const firstParagraph = document.createElement("p");

firstParagraph.textContent = "I'm at the top of the page!";

document.body.prepend(firstParagraph);

// Insert in the middle
const midParagraph = document.createElement("p");
midParagraph.textContent = "I'm in the middle!";

document.body.insertBefore(midParagraph, button);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Create a new li and add it to the bottom our ul
const newItem1 = document.createElement("li");
const newItem2 = document.createElement("li");
// give it some text
newItem1.textContent = "Item 3";
newItem2.textContent = "Item 4";
// give it a class of "list-item"
newItem1.classList.add("list-item");
newItem2.classList.add("list-item");

// Add it to the ul
list.append(newItem1, newItem2);

// Section 7: Removing elements from our page
const firstListItem = document.querySelector("li");
list.removeChild(firstListItem);

// Section 8: Parent and Child relationships

console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// Section 9: classList Methods

// target our div
const box = document.querySelector(".box");

// add class
box.classList.add("green-border");
box.classList.add("box");

// remove class
box.classList.remove("green-border");

// toggle class
box.classList.toggle("green-border");

// check if an element has a specific class - returns true or false
console.log(box.classList.contains("green-border"));

// Section 10: Creating elements using a loop

// Step 1: Create the element
// Step 2: Add content/class/attributes to the element
// Step 3: Put the element on our page

// Create our heading
const movieHeading = document.createElement("h2");

// Add text to our heading
movieHeading.textContent = "My Fav Movies!";

// Add a class to our heading
movieHeading.classList.add("section-heading");

document.body.append(movieHeading);

// Create ul to hold li's
const movieList = document.createElement("ul");
movieList.classList.add("movie-list");
document.body.append(movieList);

// Array of movies
const favoriteMovies = [
  "The Matrix",
  "The Lord of the Rings",
  "A New Hope",
  "Empire Strikes Back",
  "Return of the Jedi",
  "Resevoir Dogs",
  "Pulp Fiction",
  "Kill Bill",
];

// Loop over array of movies, create an li for each

for (let movie of favoriteMovies) {
  // create an li
  const listItem = document.createElement("li");

  // give li text
  listItem.textContent = movie;

  // give li a class
  listItem.classList.add("movie-li");

  // put the li in the ul
  movieList.append(listItem);
}
