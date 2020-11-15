const express = require("express")
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const requireLogin = require('../middleware/requireLogin')

// router.get("/protected",requireLogin,(req,res) => {
//     res.json({user:req.user})
// })

router.post('/signup',(req,res) => {
    const {nick,email,password} = req.body

    if(!nick || !email || !password) {
         return res.status(423).json({error:"please fill all fields"})
    }

    bcrypt.hash(password,12)
    .then(hashedpassword => {
        User.findOne({email:email})
        .then(savedUser => {
            if(savedUser){
                return res.status(423).json({error:"user already existing with that email"})           
            }
    
            const user = new User({
                nick,
                email,
                password:hashedpassword
            })
    
            user.save().then(
                user => {
                    res.status(200).json({message:"succesfully",user:user})
                }
            ).catch(err=> {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    
    })

    
     
})



router.post('/signin',(req,res) => {
    
    const {email,password} = req.body

    if(!email || !password) {
        return res.status(422).json({error:"teneke misin oğlum boş alanları doldur yoksa içeri almıyoruz"})
    }

    User.findOne({email:email})
    .then(user => {

        bcrypt.compare(password,user.password)
        .then(doMatch => {
            if(!doMatch) {
                return res.status(422).json({error:"şifre veya email yanlış hangisi söylemem"})
            }

            const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)

            res.json({token:token,user:user})
        })

    }).catch(err => {
        console.log(err)
    })

    

})


module.exports = router