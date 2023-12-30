const express = require('express');
const router =  express.Router();
const { v4:uuidv4 } = require('uuid');



let itemData = [
    {
        "name":"waffles",
        "toppings":"strawberry",
        "price":200
    }
];

router.get('/',(req,res)=>{
    res.send("Hello world")
});


router.post('/',(req,res)=>{
    const item = req.body;
    itemData.push({...item,id:v4() });
    res.send(`Item "${item.name}" has been added successfully. `);
});

module.exports = router;