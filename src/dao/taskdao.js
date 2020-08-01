const Task = require("./models/Task");
const uniqueRandom = require("unique-random");
const random = uniqueRandom(10000, 99999);

const getTaskByCondition = async conditionObj => {
  var returnItem;
  await Task.find(conditionObj).then(item => {
    returnItem = item;
    return item;
  });
  return returnItem;
};
const insertTask = (task, resp) => {
  var temp = new Task({ ...task, id: "TS" + random() });
  temp
    .save()
    .then(item => {
      resp.send(item);
    })
    .catch(err => {
      resp.send(err);
    });
};
const updateTask = (id, obj, req, resp) => {
  Task.updateOne({ id: id }, obj, (err, docs) => {
    if (err) {
      resp.send(err);
    } else {
      resp.send(docs);
    }
  });
};
const getTaskInDuration = async obj => {
  var returnItem;
  await Task.find({
    closeDate: { $gte: obj.startDate },
    startDate: { $lte: obj.closeDate }
  }).then(item => {
    returnItem = item;
    return item;
  });
  return returnItem;
};
const deleteTaskById = id => {
  Task.deleteOne({ id: id }, err => {
    console.log(err);
  });
};
module.exports.getTaskByCondition = getTaskByCondition;
module.exports.insertTask = insertTask;
module.exports.updateTask = updateTask;
module.exports.getTaskInDuration = getTaskInDuration;
module.exports.deleteTaskById = deleteTaskById;
