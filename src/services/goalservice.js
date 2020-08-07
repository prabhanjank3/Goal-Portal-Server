const Dao = require("../dao/goaldao");

const getGoalByCondition = conditionObj => {
  console.log(conditionObj);
  return Dao.getGoalByCondition(conditionObj);
};
const getGoalById = id => {
  return getGoalByCondition({ id: id });
};
const insertGoal = goal => {
  Dao.insertGoal(goal);
};
const updateGoal = (id, obj) => {
  return Dao.updateGoal(id, obj);
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
