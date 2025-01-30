import math from "./07_math-esm.mjs";
// easier : import { add, subtract } from "./07_math-esm.mjs"; 

// MTETHOD 1, for just 1 import : console.log(add(5,5));

// METHOD 2 : console.log(math.add(5,5));

// METHOD 3
const { add, subtract } = math
console.log(add(5,5));
console.log(subtract(1,2));

