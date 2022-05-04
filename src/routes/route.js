const express = require('express');
const createCollege = require("../controllers/createCollege")
let router = express.Router();



router.post("/functionup/colleges", createCollege)

router.post("/functionup/interns", (req, res) => {
    res.send("create intern")
})

router.get("/functionup/collegeDetails", (req, res) => {
    res.send("get collage collection")
})







module.exports = router;