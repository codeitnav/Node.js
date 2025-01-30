const http = require("node:http");

const server = http.createServer((req, res) => {
    const superHero = {
        firstName: "Bruce",
        secondName: "Wayne",
    }; // we can't send it as object, need to convert it to json format 
    // i.e. res.end(superHero); --> error

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});