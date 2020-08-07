const mongoose = require("mongoose");
const uniqid = require("uniqid");
const ProjectSchema = {
  id: {
    type: String,
    default: "PR" + (Math.random() * 100000 + 1),
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  objective: {
    type: String,
    required: false
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
    require: true
  }
};

module.exports = Item = mongoose.model("projectinfo", ProjectSchema);
