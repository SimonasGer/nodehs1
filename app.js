const http = require("http");
const url = require("url");
const cards = require("./modules/cards");

const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    console.log(query);
    switch(pathname){
        case "/students": 
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(`<section>${cards()}<section/>`);
            break;
        case "/class":
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(`<section>${cards("class", query)}<section/>`);
            break;
        case "/student":
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(`<section>${cards("student", query)}<section/>`);
            break;
        default:
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end("<h1>Page not found</h1>");
            break;
    }
})
server.listen(8081, "127.0.0.1", () => {
    console.log("Server listening on 8081 port");
}) 