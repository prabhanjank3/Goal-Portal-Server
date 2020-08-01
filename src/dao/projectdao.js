const Project = require("./models/Project");
const uniqueRandom = require("unique-random");
const random = uniqueRandom(10000, 99999);
const insertProject = (project, resp) => {
  var projectDocument = new Project({ ...project, id: "PR" + random() });
  projectDocument
    .save()
    .then(document => {
      resp.send(document);
    })
    .catch(err => {
      resp.send(document);
    });
};
const updateProject = (id, obj, resp) => {
  Project.updateOne({ id: id }, obj, (err, docs) => {
    if (err) {
      resp.send(err);
    } else {
      resp.send(docs);
    }
  });
};
const deleteProjectById = id => {
  Project.deleteOne({ id: id }, err => {
    console.log(err);
  });
};
const getProjectInDuration = async obj => {
  console.log(obj);
  var returnItem;
  await Project.find({
    closeDate: { $gte: obj.startDate },
    startDate: { $lte: obj.closeDate }
  }).then(item => {
    console.log(item);
    returnItem = item;
    return item;
  });
  return returnItem;
};
const getProjectByCondition = async conditionObj => {
  var returnItem;
  await Project.find(conditionObj).then(item => {
    returnItem = item;
    return item;
  });
  return returnItem;
};
module.exports.insertProject = insertProject;
module.exports.updateProject = updateProject;
module.exports.deleteProjectById = deleteProjectById;
module.exports.getProjectInDuration = getProjectInDuration;
module.exports.getProjectByCondition = getProjectByCondition;
