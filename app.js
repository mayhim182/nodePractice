const http = require('http');

const express = require('express');
const app = express();


//Handling GET request
app.use("/",(req,res,next)=>{
    res.send("This is an express server\n");
})  

//Handling GET request .hello
app.get("/hello",(req,res,next)=>{
    res.send("This is the hello response");
})

app.listen(3000, () => { 
    console.log("Server is Running") 
}) 

// const server = http.createServer((req, res)=>{
//     res.write("This is the response from server\n");
//     res.end();
// })

// server.listen((3000), ()=>{
//     console.log("server is running \n");
// })