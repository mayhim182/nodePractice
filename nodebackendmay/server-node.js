const http = require('http');
const { hostname } = require('os');

const httpname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req , res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type','text/plain');
    res.end("Hello ice tea");
});

server.listen(port, hostname, ()=>{
    console.log(`Server is listenning at http://${hostname}:${port}`)
});