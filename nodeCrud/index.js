const express = require('express');
const bodyParser = require('body-parser');

//routes 
const itemRoutes = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/items", itemRoutes);

app.get("/",(req,res)=>{
    res.send("Hello world!");
});

app.listen(port,()=>{
    console.log(`server started at port http://localhost:${port}`);
});

