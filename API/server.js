const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/UserRoute')
const app = express()

app.use(cors())
app.use("api/user", userRoutes)

mongoose.connect("mongodb+srv://Philip:Myanmar2023@cluster0.cze7alr.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
then(()=> {
    console.log("Connected")
})


app.listen(5000, console.log("server started"))

