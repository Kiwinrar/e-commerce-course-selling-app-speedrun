const express = require("express");
const coursesRouter = express.Router();

coursesRouter.get("/", (req, res) => {
  //get all courses
  res.json({
    msg: "All courses endpoint",
  });
});

coursesRouter.get("/purchased", (req, res) => {
  //get all purchased courses
  res.json({
    msg: "purchased courses endpoint",
  });
});

module.exports = {
  coursesRouter: coursesRouter,
};
