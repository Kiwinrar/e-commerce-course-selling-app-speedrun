import express from "express";

const adminContentRouter = express.Router();


adminContentRouter.post("/create", (req, res) => {
  res.json({
    msg: "All the contents uploaded by the admin are in this endpoint",
  });
});

adminContentRouter.put("/edit", (req, res) => {
  res.json({
    msg: "All the courses that can be edited are here",
  });
});

adminContentRouter.get("/", (req, res) => {
  res.json({
    msg: "All the courses available are here",
  });
});

export { adminContentRouter };