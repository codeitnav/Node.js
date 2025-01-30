const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping} toppings`);
});

emitter.on("order-pizza", (size) => {
    if(size === "large"){
        console.log("Serving complimentary drinks.");
    }
});

emitter.emit("order-pizza", "large", "mushroom");