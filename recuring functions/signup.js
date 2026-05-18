import * as z from "zod";
import bcrypt from "bcrypt";
import { databaseError } from "../errors/applicationErrors.js";
const SignupFunction = async (creationmodule, req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
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
    await validate.parseAsync({
      firstName,
      lastName,
      username,
      email,
      password,
    });
    const hashPassword = await bcrypt.hash(password, 10);
    const response = await creationmodule.create({
      firstName,
      lastName,
      email,
      username,
      password: hashPassword,
    });
    if (!response) {
      throw new databaseError(403);
    }
    res.status(200).send({
      message: "Successfully Profile created",
      username: username,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      if (error.issues[0].code === "invalid_type") {
        const message = error.issues.map(
          (err) => `${err.path.join(".")} cannot be empty`,
        );
        return res.status(403).send({
          message: "Error in creation of profile",
          errors: message,
        });
      } else {
        const message = error.issues.map((err) => err.message);
        return res.status(403).send({
          message: "Error in creation of profile",
          errors: message,
        });
      }
    } else if (error instanceof databaseError) {
      return res.status(error.statusCode).send({
        message: error.message,
      });
    } else {
      return res.status(500).send({
        message: "An error occurred during signup",
        error: error.message || "Unknown error",
      });
    }
  }
};

export { SignupFunction };
