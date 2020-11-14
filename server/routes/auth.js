const express = require("express")
const router = express.Router()
const User = require('../models/user')


router.get("/",(req,res) => {
    res.send("Home Page")
})

router.post('/signup',(req,res) => {
    // console.log(req.body)
    const {nick,email,password} = req.body
    if(!nick || !email || !password){
        return res.status(422).json({error:"teneke misin oğlum boş alanları doldur yoksa içeri almıyoruz"})
    }
    
    User.findOne({email:email})
    .then(existUser=> {
        if(existUser){
            return res.status(422).json({error:"geç kaldın emaili biri kapmış"})
        }

        const user = new User({
            nick,
            email,
            password
        })
    
        user.save()
        .then(user  => {
            res.json({user:user})
            
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })

})




module.exports = router