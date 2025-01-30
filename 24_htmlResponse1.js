const http = require("node:http");

const server = http.createServer((req, res) => {
    const superHero = {
        firstName: "Bruce",
        secondName: "Wayne",
    }

    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h1>Hello World</h1>");
});

server.listen(3000, () => {
    console.log("Server has started at port 3000");
})