const Dao = require("../dao/goaldao");

const getGoalByCondition = conditionObj => {
  console.log(conditionObj);
  return Dao.getGoalByCondition(conditionObj);
};
const getGoalById = id => {
  return getGoalByCondition({ id: id });
};
const insertGoal = (goal, resp) => {
  Dao.insertGoal(goal, resp);
};
const updateGoal = (id, obj, resp) => {
  return Dao.updateGoal(id, obj, resp);
};
const getGoalInDuration = obj => {
  return Dao.getGoalInDuration(obj);
};
const deleteGoalById = id => {
  return Dao.deleteGoalById(id);
};
module.exports.getGoalById = getGoalById;
module.exports.insertGoal = insertGoal;
module.exports.updateGoal = updateGoal;
module.exports.getGoalByCondition = getGoalByCondition;
module.exports.getGoalInDuration = getGoalInDuration;
module.exports.deleteGoalById = deleteGoalById;
