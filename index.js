const express = require("express");
const app = express();

const { userRouter } = require("./routes/user");
const { coursesRouter: contentRouter } = require("./routes/userCourses");
const { adminRouter } = require("./routes/admin");

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/courses", contentRouter);

app.listen(3000, () => {
  console.log("Listening at port 3000 for requests");
});
