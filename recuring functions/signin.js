import "dotenv/config.js"
import { notFoundError } from "../errors/applicationErrors.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SigninFunction=async (findModule, req, res)=>{
  try {
    const { username, password } = req.body;
    const response = await findModule.findOne({
      username,
    });
    if (!response) {
      throw new notFoundError(404, "username");
    }
    const checkPassword = await bcrypt.compare(password, response.password);
    if (!checkPassword) {
      throw new notFoundError(404, "password");
    }
    const token = jwt.sign(
      {
        userId: String(response._id),
      },
      process.env.JWT_SECRET,
    );
    res.status(200).send({
      message: "Signed in sucessfully authentication token generated",
      token: token,
    });
  } catch (error) {
    if (error instanceof notFoundError) {
      return res.status(error.statusCode).send({
        message: error.message,
      });
    } else {
      return res.status(403).send({
        message: "Error Signing in",
        error: error,
      });
    }
  }

}
export {SigninFunction}