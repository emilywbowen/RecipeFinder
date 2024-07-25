const express = require("express")
const app = express()
const morgan = require("morgan")
require ("dotenv").config()
const mongoose = require("mongoose")
const {expressjwt} = require("express-jwt")

// middleware
app.use(express.json())
app.use(morgan("dev"))



// connect to database
async function connectToDatabase(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
}

// error handling middleware
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

connectToDatabase()

// routes
app.use("/api/auth", require("./routes/authRouter.js"))
app.use("/api/main", expressjwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/recipes", require("./routes/recipeRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})


// listen

app.listen(process.env.PORT, () => {
    console.log(`Your server is at table ${process.env.PORT} .`)
})