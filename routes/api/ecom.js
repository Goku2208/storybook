const express = require("express");
const router = express.Router();

// @desc    Show add page
// @route   GET /stories/add
router.get("/signup", ensureAuth, (req, res) => {
  res.send(req.body);
});
