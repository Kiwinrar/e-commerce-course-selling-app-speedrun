const express = require('express')
const app = express()

const userRouter=require("./user")
const contentRouter=require("./courses")

app.use('/user', userRouter)

app.use('/courses', contentRouter)

app.listen(3000, ()=>{
    console.log("Listening at port 3000 for requests");
})