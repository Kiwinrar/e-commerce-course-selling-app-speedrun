const express=require('express');
const router=express.Router();


router.post('/signup', (req, res)=>{
    //Signup
    res.json({
        msg: "signup endpoint"
    })
})

router.post('/signin', (req, res)=>{
    //Signin
    res.json({
        msg: "signin endpoint"
    })
})

module.exports=router