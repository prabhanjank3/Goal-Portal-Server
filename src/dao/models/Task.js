const mongoose = require("mongoose");
const uniqueRandom = require("unique-random");
const random = uniqueRandom(10000, 99999);
const TaskSchema = {
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  goalId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "No Description"
  },
  Pts: {
    type: Number,
    required: true
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
    require: true
  },
  state: {
    type: Number,
    default: 0
  },
  isBlocked: { type: Boolean, default: false },
  hasDefect: { type: Boolean, default: false },
  objective: {
    type: String,
    default: "No Objective"
  },
  comments: {
    type: String,
    default: ""
  }
};

module.exports = Item = mongoose.model("taskinfo", TaskSchema);
