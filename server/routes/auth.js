const express = require("express")
const router = express.Router()
const User = require('../models/user')
const bcyrpt = require('bcryptjs')

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

        bcyrpt.hash(password,12)
        .then(hashedPassword => {
            const user = new User({
                nick,
                email,
                password:hashedPassword
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
        }).catch(err => {
            console.log(err)
        })

        

})

router.post('/signin',(req,res) => {
    
    const {email,password} = req.body

    if(!email || !password) {
        return res.status(422).json({error:"teneke misin oğlum boş alanları doldur yoksa içeri almıyoruz"})
    }

    User.findOne({email:email})
    .then(user => {

        bcyrpt.compare(password,user.password)
        .then(doMatch => {
            if(!doMatch) {
                return res.status(422).json({error:"şifre veya email yanlış hangisi söylemem"})
            }

            res.json({data:"sen osun"})
        })

    }).catch(err => {
        console.log(err)
    })

    

})


module.exports = router