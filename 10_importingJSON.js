// importing json file as module
// JSON - javascript object notation

const data = require("./09data.json");
// if just "./09data" was given, node would 1st try to find 09data.js before 09data.json

console.log(data);
console.log(data.name);