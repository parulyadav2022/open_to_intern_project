const express = require('express');
let router = express.Router();



router.post("/functionup/colleges", (req, res) => {
    res.send("create college")
})

router.post("/functionup/interns", (req, res) => {
    res.send("create intern")
})

router.get("/functionup/collegeDetails", (req, res) => {
    res.send("get collage collection")
})







module.exports = router;