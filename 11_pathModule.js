// The path module provides utilities for working with file and directory paths

const path = require("node:path") // prefixe with "node:" to indicate that it's a built-in module - it's OPTIONAL
// path module has 14 methods and functions

console.log("\Reference:");
console.log(__filename);
console.log(__dirname);

// baseaname - returns the last portion of the path
console.log("\nBasename:");
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// extname - returns the extension of the path
console.log("\nextname:");
console.log(path.extname(__filename));
console.log(path.extname(__dirname)); //no output 

// parse - returns the significant element of the path
console.log("\nparse:");
console.log(path.parse(__filename)); // we can access the elements like root, base, etc. using the "." dot notation

// format : returns a path string given an object
console.log("\nformat:");
console.log(path.format(path.parse(__filename)));

// isAbsolute : returns whether a path is absolute or not
console.log("\nisAbsolute:");
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./09data.json"));

// join : joins all the given paths together using a platofrm specific delimiter and then normalises the resulting path [delimiter = forward slash for mac, backward slash for windows]
// accepts one or more strings as arguments
console.log("\njoin:");
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html")); // IMPORTANT
console.log(path.join(__dirname, "09data.json")); // gives the full absolute path to 09data.json

// resolves : resolves a path or sequence of paths into absolute path
console.log("\nresolve:");
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "09data.json")); 
