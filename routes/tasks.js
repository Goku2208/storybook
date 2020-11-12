const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");

const Task = require("../models/Task");

router.get("/add", ensureAuth, (req, res) => {
  res.render("tasks/add");
});

// post
router.post("/", ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user._id;
    await Task.create(req.body);
    res.redirect("tasks/mytasks");
  } catch (err) {
    res.redirect("error/500");
  }
});

//task list
router.get("/mytasks", ensureAuth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).lean();
    res.render("tasks/mytasks", { name: req.user.firstName, tasks });
  } catch (err) {
    console.error(err);
    res.render("error/500");
  }
});

module.exports = router;
