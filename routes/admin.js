import express from "express";
import { adminContentRouter } from "../contents/adminContent.js";
import { adminModel } from "../schema/db.js";
import { SignupFunction } from "../recuring functions/signup.js";
import { SigninFunction } from "../recuring functions/signin.js";

const adminRouter = express.Router();

adminRouter.post("/signup", async (req, res) => {
  SignupFunction(adminModel, req, res);
});

adminRouter.post("/signin", (req, res) => {
  SigninFunction(adminModel, req, res);
});

adminRouter.use("/courses", adminContentRouter);

export { adminRouter };
