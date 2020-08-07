const Service = require("../services/authservice");
const authenticateUser = (req, resp) => {
  console.log(req.session);
  Service.authenticateUser(req.query, resp);
};
const insertUser = (req, resp) => {
  console.log(req.body);
  console.log("Received request");
  Service.insertUser(req.body, resp);
};
module.exports.authenticateUser = authenticateUser;
module.exports.insertUser = insertUser;
