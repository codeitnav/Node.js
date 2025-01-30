const superHero = require("./04_super-hero.js");

console.log(superHero.getName());

superHero.setName("Superman");
console.log(superHero.getName());

const newSuperHero = require("./04_super-hero.js")
console.log(superHero.getName()); //will log Superman as the node already remembers that this module has already been loaded before - not loading it freshly