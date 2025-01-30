const PizzaShop = require("./13_pizzaShop");
const DrinkMachine = require("./15_drinkMachine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping} toppings`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms and olive");
pizzaShop.displayOrderNumber();