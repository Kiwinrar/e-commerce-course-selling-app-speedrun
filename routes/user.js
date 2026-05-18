import express from "express";
import { coursesRouter } from "../contents/userCourses.js";
import { userModel } from "../schema/db.js";
import { SignupFunction } from "../recuring functions/signup.js";
import { SigninFunction } from "../recuring functions/signin.js";
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  SignupFunction(userModel, req, res);
});

userRouter.post("/signin", async (req, res) => {
  SigninFunction(userModel, req, res);
});

userRouter.use("/courses", coursesRouter);

export { userRouter };
