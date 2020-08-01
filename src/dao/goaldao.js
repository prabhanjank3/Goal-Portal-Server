const Goal = require("./models/Goal");
const uniqueRandom = require("unique-random");
const random = uniqueRandom(10000, 99999);
const insertGoal = (goal, resp) => {
  var goalDocument = new Goal({ ...goal, id: "GO" + random() });
  goalDocument
    .save()
    .then(document => {
      console.log(document);
      resp.send(document);
    })
    .catch(err => {
      console.log(err);
      resp.send(err);
    });
};
const updateGoal = (id, obj, resp) => {
  Goal.updateOne({ id: id }, obj, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated: ");
      console.log(docs);
      resp.send(docs);
    }
  });
};
const deleteGoalById = id => {
  Goal.deleteOne({ id: id }, err => {
    console.log(err);
  });
};
const getGoalInDuration = async obj => {
  var returnItem;
  await Goal.find({
    closeDate: { $gte: obj.startDate },
    startDate: { $lte: obj.closeDate }
  }).then(item => {
    console.log(item);
    returnItem = item;
    return item;
  });
  return returnItem;
};
const getGoalByCondition = async conditionObj => {
  var returnItem;
  await Goal.find(conditionObj).then(item => {
    returnItem = item;
    return item;
  });
  return returnItem;
};
module.exports.insertGoal = insertGoal;
module.exports.updateGoal = updateGoal;
module.exports.deleteGoalById = deleteGoalById;
module.exports.getGoalInDuration = getGoalInDuration;
module.exports.getGoalByCondition = getGoalByCondition;
