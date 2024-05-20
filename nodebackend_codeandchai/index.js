require('dotenv').config()

const express = require('express');
const app = express();



app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/mayank', (req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
});

app.get('/youtube', (req, res)=> {
    res.send("<h2>Chai aur code</h2>")
});

app.listen(process.env.port, ()=>{
    console.log(`Example app listening on port ${process.env.port}`);
});