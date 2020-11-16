const express = require("express")
const requireLogin = require("../middleware/requireLogin")
const router = express.Router()
const Comment = require("../models/comment")



//makeComment
//userid,postid
router.post('/makecomment',requireLogin,(req,res) => {
    const {body,postId} = req.body


    if(!body) {
        return res.status(423).json({error:"lütfen tüm alanları doldurunuz"})
    }

    const comment = new Comment({
        body,
        postId,
        postedBy:req.user._id
    })

    comment.save()
    .then(result=> {
        res.json({comment:result})
    })


})

router.get('/comments/:postId',requireLogin,(req,res) => {
    const {postId} = req.params
    
    Comment.find({postId:postId})
    .then(results => {
        res.json({comments:results})
    }).catch(err => {
        console.log(err)
    })
})


module.exports= router