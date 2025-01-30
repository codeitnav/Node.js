// htmlResponse is useful when the content are static
// html templates are used when the content are dynamic -e.g. displaying the logged in user name

const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{
    const name = "Navya";
    res.writeHead(200, {"content-type":"text/html"});
    let html = fs.readFileSync("./26_index1.html", "utf-8");
    html = html.replace("{{name}}", name);
    res.end(html);
})

server.listen(3000, ()=>{
    console.log("Server is running at port 3000");
})