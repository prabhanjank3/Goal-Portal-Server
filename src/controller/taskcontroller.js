const Utility = require("../utility/utility");
const Service = require("../services/taskservice");

//CRUD Opearations
const insertTask = (req, resp) => {
  console.log(req.body);
  Service.insertTask(req.body, resp);
};
const updateTask = async (req, resp) => {
  console.log(req.body);
  Service.updateTask(req.params.id, req.body, req, resp);
};
const deleteTaskById = (req, resp) => {
  var id = req.params.id;
  Service.deleteTaskById(id);
};

// Other Required Operations
const getTaskById = (req, resp) => {
  const id = req.params.id;
  Service.getTaskById(id).then((res) => resp.send(res));
};
const getTaskByCondition = (req, resp) => {
  var query = Utility.convertQuerytoObject(req.query);

  Service.getTaskByCondition(query).then((res) => {
    console.log(res);
    resp.send(res);
  });
};
const getTaskInDuration = (req, resp) => {
  var query = Utility.convertQuerytoObject(req.query);
  Service.getTaskInDuration(query).then((res) => {
    console.log(res);
    resp.send(res);
  });
};

module.exports.getTaskById = getTaskById;
module.exports.insertTask = insertTask;
module.exports.updateTask = updateTask;
module.exports.getTaskByCondition = getTaskByCondition;
module.exports.getTaskInDuration = getTaskInDuration;
module.exports.deleteTaskById = deleteTaskById;
