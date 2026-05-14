const express = require("express");

const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
  //Signup
  res.json({
    msg: "signup endpoint",
  });
});

userRouter.post("/signin", (req, res) => {
  //Signin
  res.json({
    msg: "signin endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
