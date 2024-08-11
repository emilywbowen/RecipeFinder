const express = require("express")
const app = express()
const morgan = require("morgan")
require ("dotenv").config()
const mongoose = require("mongoose")
const {expressjwt} = require("express-jwt")
const path = require("path")

// middleware
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "client", "dist")))



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
app.use("/api", expressjwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use("/api/recipes", require("./routes/recipeRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "client", "dist", "index.html")))
// listen

app.listen(process.env.PORT, () => {
    console.log(`Your server is at table ${process.env.PORT} .`)
})