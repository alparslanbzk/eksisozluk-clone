const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.ObjectId


const commentSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
    postId:{
        type:ObjectId,
        ref:"Post"
    },
    likes:[{
        type:ObjectId,
        ref:"User"
    }]
})

module.exports=mongoose.model("Comment",commentSchema)