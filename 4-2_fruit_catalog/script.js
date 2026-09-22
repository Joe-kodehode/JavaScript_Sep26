// Fruit Catalog Project

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    price: 3.5,
    country: "USA",
    alt: "a red apple on a white background",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    price: 1.2,
    country: "Ecuador",
    alt: "A fresh banana on a white background",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    price: 2.8,
    country: "Spain",
    alt: "lots of orange slices",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    price: 6.0,
    country: "Mexico",
    alt: "a pile of cut up strawberries",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    price: 4.0,
    country: "India",
    alt: "a stack of mangos",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    price: 2.5,
    country: "Italy",
    alt: "a heap of grapes",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    price: 3.0,
    country: "Costa Rica",
    alt: "a pineapple cut in half",
  },
];

// Target existing html elements
const fruitContainer = document.querySelector("#fruit-container");

// LOOP STARTS HERE
for (let fruit of fruits) {
  // Create a card with content
  const card = document.createElement("article");
  card.classList.add("fruit-card");

  // create h3 & give it textContent/class
  const title = document.createElement("h3");
  title.textContent = fruit.name;
  title.classList.add("fruit-title");

  // create img & give it class/src/alt
  const fruitImage = document.createElement("img");
  fruitImage.classList.add("fruit-image");
  fruitImage.src = `images/${fruit.name}.jpg`;
  fruitImage.alt = fruit.alt;

  // create p for info & give it textContent/class
  const fruitInfo = document.createElement("p");
  fruitInfo.textContent = `Color: ${fruit.color}, Country: ${fruit.country}`;
  fruitInfo.classList.add("fruit-info");

  // create p for calories & give it textContent/class
  const fruitCalories = document.createElement("p");
  fruitCalories.textContent = `Calories: ${fruit.calories} per 100g`;
  fruitCalories.classList.add("fruit-calories");

  // create p for price & give it textContent/class
  const fruitPrice = document.createElement("p");
  fruitPrice.textContent = `Price: ${fruit.price}kr per kg`;
  fruitPrice.classList.add("fruit-price");

  // append our elements to the card
  card.append(title, fruitImage, fruitInfo, fruitCalories, fruitPrice);

  // append the card to the fruitContainer
  fruitContainer.append(card);

  // LOOP ENDS HERE
}
