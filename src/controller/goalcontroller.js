const Utility = require("../utility/utility");
const Service = require("../services/goalservice");

//CRUD Opearions
const insertGoal = (req, resp) => {
  console.log(req.body);
  Service.insertGoal(req.body);
};
const updateGoal = (req, resp) => {
  Service.updateGoal(req.params.id, req.body);
};
const deleteGoalById = (req, resp) => {
  var id = req.params.id;
  Service.deleteGoalById(id);
};

const getGoalByCondition = (req, resp) => {
  var query = Utility.convertQuerytoObject(req.query);
  Service.getGoalByCondition(query).then(res => {
    console.log(res);
    resp.send(res);
  });
};
const getGoalInDuration = (req, resp) => {
  var query = Utility.convertQuerytoObject(req.query);
  Service.getGoalInDuration(query).then(res => {
    console.log(res);
    resp.send(res);
  });
};
const getGoalById = (req, resp) => {
  const id = req.params.id;
  Service.getGoalById(id).then(res => resp.send(res));
};

module.exports.getGoalById = getGoalById;
module.exports.insertGoal = insertGoal;
module.exports.updateGoal = updateGoal;
module.exports.getGoalByCondition = getGoalByCondition;
module.exports.getGoalInDuration = getGoalInDuration;
module.exports.deleteGoalById = deleteGoalById;
