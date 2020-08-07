const uniqueRandom = require("unique-random");
const Contact = require("./models/Contact");
const random = uniqueRandom(1000, 9999);

const authenticateUser = (credentialObj, resp) => {
  Contact.findOne({ email: credentialObj.email }).then(item => {
    if (item !== null) {
      if (item.password === credentialObj.password) {
        console.log("Success");
        resp.send({ status: 200, msg: "Authentication Successful" });
      } else {
        resp.send({ status: 404, msg: "Incorrect Password" });
      }
    } else {
      resp.send({ status: 404, msg: "No User Found" });
    }
  });
};
const insertUser = (userObj, resp) => {
  console.log(userObj);
  var newUser = new Contact({ ...userObj, id: "USR" + random() });
  newUser
    .save()
    .then(document => {
      console.log("Inserted new User");
      console.log(document);
      resp.send(document);
    })
    .catch(err => {
      console.log(err);
      resp.send(err);
    });
};
module.exports.authenticateUser = authenticateUser;
module.exports.insertUser = insertUser;
