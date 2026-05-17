import express from "express";
import { coursesRouter } from "../contents/userCourses.js";
import * as z from "zod";
import bcrypt from "bcrypt";
import { userModel } from "../schema/db.js";
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;
    const validate = z.object({
      email: z
        .string()
        .min(1, {
          message: "Email is a required feild",
        })
        .email(),
      username: z.string().min(4, {
        message: "The username must contain at least 8 letters",
      }),
      password: z.string().min(8, {
        message: "The length of the password must be atleast 8 characters long",
      }),
      firstName: z.string().min(1, {
        message: "FirstName is a required field",
      }),
      lastName: z.string().min(1, {
        message: "LastName is a required field",
      }),
    });
    await validate.parseAsync({ username, email, password, firstName, lastName });
    const hashPassword = await bcrypt.hash(password, 10);
    const response = await userModel.create({
      firstName,
      lastName,
      email,
      username,
      password: hashPassword,
    });
    if (response) {
      res.status(200).send({
        message: "Profile created",
        username: username,
      });
    }
    res.status(403).send({
      message: "Error in entering the values in the database",
    });
  } catch (error) {
    console.log("The Error in signing up:", error);
    if(error instanceof z.ZodError){
      const message = error.issues.map(err => err.message);
      res.status(403).send({
        message: "Error in creation of profile", 
        errors: message
      });
    } else {
      res.status(500).send({
        message: "An error occurred during signup",
        error: error.message || "Unknown error"
      });
    }
  }
});

userRouter.post("/signin", (req, res) => {
  //Signin
  res.json({
    msg: "signin endpoint",
  });
});

userRouter.use("/courses", coursesRouter);

export { userRouter };
