const Task = require("../dao/models/Task");
const uniqid = require("uniqid");

const task1 = {
  id: uniqid(),
  title: "Complete Reading of Article-01",
  description:
    "Read this book to get basic understanding of financial management",
  Pts: 3,
  closeDate: new Date(2020, 7, 19),
  state: 1
};
const task2 = {
  id: uniqid(),
  title: "Complete Reading of Article-02",
  description: "Read this book to get understanding of life",
  Pts: 3,
  closeDate: new Date(2020, 7, 19),
  state: 1
};
const task3 = {
  id: uniqid(),
  title: "Complete Reading of Article-03",
  description: "Read this book to get understanding of people",
  Pts: 3,
  closeDate: new Date(2020, 7, 19),
  state: 1
};

const taskarr = [task1, task2, task3];

module.exports.taskarr = taskarr;
