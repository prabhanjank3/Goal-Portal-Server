const Dao = require("../dao/taskdao");
const getTaskByCondition = conditionObj => {
  console.log(conditionObj);
  return Dao.getTaskByCondition(conditionObj);
};
const getTaskById = id => {
  return getTaskByCondition({ id: id });
};
const insertTask = (task, resp) => {
  Dao.insertTask(task, resp);
};
const updateTask = (id, obj, req, resp) => {
  return Dao.updateTask(id, obj, req, resp);
};
const getTaskInDuration = obj => {
  return Dao.getTaskInDuration(obj);
};
const deleteTaskById = id => {
  return Dao.deleteTaskById(id);
};
module.exports.getTaskById = getTaskById;
module.exports.insertTask = insertTask;
module.exports.updateTask = updateTask;
module.exports.getTaskByCondition = getTaskByCondition;
module.exports.getTaskInDuration = getTaskInDuration;
module.exports.deleteTaskById = deleteTaskById;
