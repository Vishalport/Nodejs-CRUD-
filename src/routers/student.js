const express = require("express");
const router = new express.Router();
const Student = require("../models/students")

router.get("/", (req, res) => {
    res.send("hello.. bab!!");
});


// get mehtord by using await and async 

router.post("/Student", async(req, res) => {
    try {
        const user = new Student(req.body);
        const creatuser = await user.save();
        res.status(201).send(creatuser);
        console.log(creatuser);

    }catch(e) {
        res.status(400).send(e);
    }
});


// get mehtord by using await and async 
router.get("/user", async(req, res) => {
    try {
        const StudentData = await Student.find();
        res.send(StudentData);
    }catch(e){
        res.status(400).send(e)
    }
});


// delete mehtord by using await and async

router.delete("/student/:id", async(req, res) => {
    try {
        const deleteuser = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id) {
            return res.status(400).send()
        }
        res.send(deleteuser);
    }catch(e) {
        res.status(500).send(e);
    }
});

 

// Update mehtord by using await and async
router.patch("/student/:id", async(req, res)=> {
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body);
        res.send(updateStudent);

    }catch(e) {
        res.status(404).send(updateStudent);
    }
});


module.exports = router;




// app.post("/Student",(req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=> {
//         res.status(201).send(user);
//         console.log("User is added..!!")
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })




