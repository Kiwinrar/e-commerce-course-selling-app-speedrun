import express from "express";
import { adminContentRouter } from "../contents/adminContent.js";
import { adminModel } from "../schema/db.js";

const adminRouter = express.Router();

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

export { adminRouter };

