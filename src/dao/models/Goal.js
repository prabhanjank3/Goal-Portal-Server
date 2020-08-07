const mongoose = require("mongoose");
const uniqid = require("uniqid");
const GoalSchema = {
  id: {
    type: String,
    default: "GO" + (Math.random() * 100000 + 1),
    unique: true
  },
  projectId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  objective: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "No Description"
  },
  createdOn: {
    type: Date,
    default: new Date()
  },
  startDate: {
    type: Date,
    default: new Date()
  },
  closeDate: {
    type: Date,
    required: true
  },
  comments: {
    type: String,
    default: ""
  }
};

module.exports = Item = mongoose.model("goalsinfo", GoalSchema);
