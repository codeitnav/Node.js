/*
const fs = require("node:fs");
console.log("First");
fs.readFile("./17_file.txt", "utf-8", (err,data)=>{
    console.log("File contents");
});
console.log("Last");

OUTPUT:
First
Last
File contents
*/

/*
const crypto = require("node:crypto");

const start = Date.now();
crypto.pbkdf2Sync("password","salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password","salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password","salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now()-start); */ // output will take thrice of the time of that needed to run "crypto.pbkdf2Sync" once
// inference : every method in node.js that has the "sync" suffic always runs on the main thread and is blocking


// increasing default thread pool size
process.env.UV_THREADPOOL_SIZE = 6;
const crypto = require("node:crypto");
const MAX_CALLS = 16;
const start = Date.now();
for(let i=0; i<MAX_CALLS; i++){
    crypto.pbkdf2("password","salt", 100000, 512, "sha512", ()=>{
        console.log(`Hash: ${i+1}`, Date.now()-start);
    });
}
// libuv has 4 threads by default