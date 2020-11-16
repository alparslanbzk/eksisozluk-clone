const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')


const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT

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
app.use(cors())
app.use(express.json())


app.use(require("./routes/comment"))
app.use(require("./routes/auth"))
app.use(require("./routes/post"))




app.listen(PORT,() => {
    console.log("server is running",PORT)
})