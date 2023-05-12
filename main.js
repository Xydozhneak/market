
seasons = ["winter", "summer"];
fruits = ["grapes", "coconut", "raspberry"];
vegetables = ["cabbage", "avocado", "tomato"];
multiplier = 1;

//choose the season
seasonInput = 0;
do {
seasonInput = prompt("What season is it now?").trim().toLowerCase();
} while (!seasons.includes(seasonInput));
if (seasonInput === "winter") {
multiplier = 2;
} else {
multiplier = 0.8;
}

//choose a product category
categoryInput = 0;
do {
categoryInput = prompt("What category?").trim().toLowerCase();
} while (categoryInput !== "fruits" && categoryInput !== "vegetables");

//select the type of fruit or vegetable and a picture
typeInput = 0;
if (categoryInput === "fruits") {
do {
typeInput = prompt("What type of fruit?").trim().toLowerCase();
} while (!fruits.includes(typeInput));
switch (typeInput) {
    case "grapes":
      document.write('<img src="./images/fruits/grapes.svg" alt="grape" width=200px> ')
      price = 20;
      break;
    case "raspberry":
        document.write('<img src="./images/fruits/raspberry.svg" alt="grape" width=200px> ')
      price = 25;
      break;
    case "coconut":
        document.write('<img src="./images/fruits/coconut.svg" alt="grape" width=200px> ')
      price = 50;
      break;
  }
} else {
do {
typeInput = prompt("What type of vegetable?").trim().toLowerCase();
} while (!vegetables.includes(typeInput));
switch (typeInput) {
    case "cabbage":
        document.write('<img src="./images/fruits/cabbage.svg" alt="grape" width=200px> ')
      price = 8;
      break;
    case "avocado":
        document.write('<img src="./images/fruits/avocado.svg" alt="grape" width=200px> ')
      price = 30;
      break;
    case "tomato":
        document.write('<img src="./images/fruits/tomato.svg" alt="grape" width=200px> ')
      price = 10;
      break;
  }
}

//count the quantity and total cost
quantityInput = 0;
do {
quantityInput = parseInt(prompt("How many have you selected?"));
} while (isNaN(quantityInput) || quantityInput < 1);
finalPrice = quantityInput * multiplier*price;

//display everything on the page
document.write(`<br>Selected product :<b>${typeInput}</b><br>`);
document.write(`Season :<b>${seasonInput}</b><br>`);
document.write(`Count :<b>${quantityInput}</b><br>`);
document.write(`Total price :<b>${finalPrice}UAH</b><br>`);