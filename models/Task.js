const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema({
  task_title: {
    type: String,
    required: true,
  },
  complete: {
    type: String,
    default: false,
    enum: [true, false],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskScheme);
