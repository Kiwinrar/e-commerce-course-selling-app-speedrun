const express = require('express')
const app = express()

const userRouter=require("./user")

app.use('/user', userRouter)

app.get('/courses', (req, res)=>{
    //get all courses
    res.json({
        msg: "All courses endpoint"
    })
})

app.get('/user/courses/purchased', (req, res)=>{
    //get all purchased courses
    res.json({
        msg: "purchased courses endpoint"
    })
})

app.listen(3000, ()=>{
    console.log("Listening at port 3000 for requests");
})