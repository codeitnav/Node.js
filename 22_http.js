const http = require("node:http");

// createServer func accepts a callback func as its argument
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});