const jwt = require("jsonwebtoken")

const User = require('../models/user')


module.exports = (req,res,next) => {

    const {authorization} = req.headers

    if(!authorization){
        res.status(422).json({error:"nereye önce giriş yap"})
    }

    const token = authorization.replace("Bearer ","")

    jwt.verify(token,process.env.JWT_SECRET,(err,payload) => {
        if(err) {
            res.status(401).json({error:"giriş yapmalısın"})
        }
        const _id = payload._id

        User.findById(_id)
        .then(userdata => {
            req.user = userdata
            // console.log(payload)
            next()
        })

    })

}