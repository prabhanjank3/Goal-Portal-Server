const Dao = require("../dao/authdao");
const authenticateUser = (credentialObj, resp) => {
  Dao.authenticateUser(credentialObj, resp);
};
const insertUser = (obj, resp) => {
  Dao.insertUser(obj, resp);
};
module.exports.authenticateUser = authenticateUser;
module.exports.insertUser = insertUser;
