const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    const html = 
    res.end("<h1>Hello World</h1>");
});

server.listen(3000, () => {
    console.log("Server has started at port 3000");
})