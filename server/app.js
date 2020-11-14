const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const PORT = 5000

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

mongoose.connection.on("connected",() => {
    console.log("mongoose is running")
})

mongoose.connection.on("error",(err) => {
    console.log("mongoose is crushed", err)
})

app.use(express.json())

app.use(require("./routes/auth"))




app.listen(PORT,() => {
    console.log("server is running")
})