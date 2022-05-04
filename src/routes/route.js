const express = require('express');
const createIntern = require('../controllers/createIntern')
const getCollegeList = require('../controllers/getcollegeList')
let router = express.Router();



router.post("/functionup/colleges", (req, res) => {
    res.send("create college")
})

router.post("/functionup/interns", createIntern)

router.get("/functionup/collegeDetails", getCollegeList)







module.exports = router;