const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.ObjectId

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    },
    likes:[
        {type:ObjectId,ref:"User"}
    ],
    comments:[
        {type:ObjectId,ref:"Comment"}
    ]
})

module.exports = mongoose.model("Post",postSchema)