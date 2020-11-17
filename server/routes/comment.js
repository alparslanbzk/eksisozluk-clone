const express = require("express")
const requireLogin = require("../middleware/requireLogin")
const router = express.Router()
const Comment = require("../models/comment")
const Post = require("../models/post")



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

        Post.findByIdAndUpdate({_id:postId},{
            $push: {comments:result._id}
        },{
            new:true
        }).exec((err,result) => {
            if(err) {
                return res.status(422).json({error:err})
            }else {
                res.json({comment:result})
            }
        })
        
    })
})

router.get('/comments/:postId',(req,res) => {
    
    const {postId} = req.params
    console.log("burası orası",postId)
    
    Comment.find({postId:postId})
    .then(results => {
        res.json({results})
    }).catch(err => {
        console.log(err)
    })
})


module.exports= router