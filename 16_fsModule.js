const fs = require("fs");

// reading file

// async
//the 2nd argument is the func that needs to be invoked when the contents are read
const fileContentAsync = fs.readFile("./17_file.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
});

// sync
const fileContentSync = fs.readFileSync("./17_file.txt", "utf-8"); 
// // not giving "utf-8" will give buffer as log
// readFileSync will specify the synchrounous nature i.e. the js will wait till the file contents have been read
// it'll be used in scenes like - reading configuration data from a file and using it in further codes down


// writing content into the file

// sync
fs.writeFileSync("./18_greet.txt", "This file was created using write function");

// if {flag: "a"} was not mentioned, the file content would be overwritten
fs.writeFile("./18_greet.txt", "\nThis sentence was added asynchronously",{flag: "a"}, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("File written");
    }
});