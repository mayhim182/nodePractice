// import express from 'express'; //For ESM (Ecma Script Module)
const e = require('express');
const express = require('express'); //For common JS module

const app = express();
const port = process.env.port || 3000;

let data = [
    { "name": "Arjun Tripathi", "course": "MCA", "roll_no": "14", "id": 1},
    { "name": "Rahul Durgapal", "course": "MCA", "roll_no": "36", "id": 2 },
    { "name": "Aman Yadav", "course": "MCA", "roll_no": "08", "id": 3}
];


app.get('/', function (req, res){
    res.status(200).json(data);
});


app.get("/:id", function (req,res){
    let found = data.find((item)=>{
        return item.id == parseInt(req.params.id);
    });
    found ? res.status(200).send(found) : res.sendStatus(404);
});

app.post('/', function(req,res){
    let items = data.map(item => item.id);
    let newId = items.length > 0 ? Math.max.apply(Math,items)+1 : 1;

    console.log("here",req.body);

    let newItem = {
        id:newId,
        name:req.body?.name,
        course:req.body?.course,
        roll_no:req.body?.roll_no
    }

    data.push(newItem);
    res.status(201).json({
        'message':"Successfully Created"
    });
});

app.put('/:id',function(req,res){
    let found = data.find(item => item.id == parseInt(req.params.id));
    if(found){
        let updateData = {
            id: found.id,
            name: req.body.name,
            course:req.body.course,
            roll_no:req.body.roll_no,
        };

        let targetIndex = data.indexOf(found);
        data.splice(targetIndex,1,updateData);
        res.status(201).json({
            'message':"Data Updated"
        });
    }else{
        res.status(404).json({
            "message":"Unable to insert data"
        });
    }
});

//Partially update a record
app.patch("/:id",function(req,res){
    let found = data.find(item => item.id == req.params.id);
    if(found){
        if(req.body.name){
            found.name = req.body.name;
        }
        if(req.body.course){
            found.course = req.body.course;
        }
        if(req.body.roll_no){
            found.roll_no = req.body.roll_no;
        }
        res.status(201).json({"message":"data updated"});
    }else{
        res.status(404).json({
            'message':'Not found'
        })
    }
});


app.delete('/:id',function(req,res){
    let found = data.find(item => item.id == parseInt(req.params.id));
    if(found){
        let targetIndex = data.indexOf(found);
        data.splice(targetIndex,1);
        res.sendStatus(204);
    }else{
        res.sendStatus(404);
    }
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log(`Server is running at : http://localhost:${port}`);
});