const Utility = require("../utility/utility");
const Service = require("../services/projectservice");

//CRUD Operation
const insertProject = (req, resp) => {
  console.log(req.body);
  Service.insertProject(req.body, resp);
};
const updateProject = (req, resp) => {
  Service.updateProject(req.params.id, req.body, resp);
};
const deleteProjectById = (req, resp) => {
  var id = req.params.id;
  Service.deleteProjectById(id);
};
// Required Operations
const getProjectById = (req, resp) => {
  const id = req.params.id;
  Service.getProjectById(id).then(res => resp.send(res));
};

const getProjectByCondition = (req, resp) => {
  var query = Utility.convertQuerytoObject(req.query);
  Service.getProjectByCondition(query).then(res => {
    console.log(res);
    resp.send(res);
  });
};
const getProjectInDuration = (req, resp) => {
  var query = Utility.convertQuerytoObject(req.query);
  Service.getProjectInDuration(query).then(res => {
    resp.send(res);
  });
};

module.exports.getProjectById = getProjectById;
module.exports.insertProject = insertProject;
module.exports.updateProject = updateProject;
module.exports.getProjectByCondition = getProjectByCondition;
module.exports.getProjectInDuration = getProjectInDuration;
module.exports.deleteProjectById = deleteProjectById;
