const express = require("express")
const router = express.Router()
const Post = require('../models/post')
const requireLogin = require('../middleware/requireLogin')

router.post('/create',requireLogin,(req,res) => {
    
    const {title,body} = req.body

    if(!title || !body) {
        res.status(422).json({error:"teneke misin oğlum boş alanları doldur yoksa içeri almıyoruz"})
    }

    const post = new Post({
        title,
        body,
        postedBy:req.user._id
    })

    post.save()
    .then(post => {
        res.json({message:"post is succesfully created"})
    }).catch(err =>{
        console.log(err)
    }).catch(err => {
        console.log(err)
    })

    
})

router.get('/allpost',(req,res) => {
    Post.find()
    .populate("postedBy","_id nick")
    .then(posts=> {
        res.json({posts:posts})
    }).catch(err => {
        console.log(err)
    })
})


router.get('/mypost',requireLogin,(req,res) => {
    const {_id} = req.user
    
    Post.find({postedBy:_id})
    .then(post => {
        res.json({post:post})
    }).catch(err => {
        console.log(err)
    })
})


module.exports = router