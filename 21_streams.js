const fs = require("fs")

const readableStream = fs.createReadStream("./17_file.txt", {
    encoding: "utf-8",
    highWaterMark: 2, // will log data in 2 bytes
});

const writeableStream = fs.createWriteStream("./20_file2.txt");

readableStream.on("data", (chunk) => {
    console.log(chunk)
    writeableStream.write(chunk);
});