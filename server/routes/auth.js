const express = require("express")
const router = express.Router()
const User = require('../models/user')


router.get("/",(req,res) => {
    res.send("Home Page")
})

router.post('/signin',(req,res) => {
    console.log(req.body)
})




module.exports = router