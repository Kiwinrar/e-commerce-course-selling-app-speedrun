import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { coursesRouter as contentRouter } from "./contents/userCourses.js";
import { adminRouter } from "./routes/admin.js";

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", contentRouter);

const main = async () => {
  try {
    const response=await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MongoDB connected");
    
    app.listen(3000, () => {
      console.log("Listening at port 3000 for requests");
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

main();