const express = require("express");
const adminRouter = express.Router();
const { adminContentRouter } = require("./adminContent");

adminRouter.post("/signup", (req, res) => {
  //Signup
  res.json({
    msg: "signup endpoint",
  });
});

adminRouter.post("/signin", (req, res) => {
  //Signin
  res.json({
    msg: "signin endpoint",
  });
});

adminRouter.use("/courses", adminContentRouter);

module.exports = {
  adminRouter: adminRouter,
};
