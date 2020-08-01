const Dao = require("../dao/projectdao");

const getProjectByCondition = conditionObj => {
  console.log(conditionObj);
  return Dao.getProjectByCondition(conditionObj);
};
const getProjectById = id => {
  return getProjectByCondition({ id: id });
};
const insertProject = (project, resp) => {
  Dao.insertProject(project, resp);
};
const updateProject = (id, obj, resp) => {
  return Dao.updateProject(id, obj, resp);
};
const getProjectInDuration = obj => {
  return Dao.getProjectInDuration(obj);
};
const deleteProjectById = id => {
  return Dao.deleteProjectById(id);
};
module.exports.getProjectById = getProjectById;
module.exports.insertProject = insertProject;
module.exports.updateProject = updateProject;
module.exports.getProjectByCondition = getProjectByCondition;
module.exports.getProjectInDuration = getProjectInDuration;
module.exports.deleteProjectById = deleteProjectById;
