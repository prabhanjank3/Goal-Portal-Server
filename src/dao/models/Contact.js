const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const ContactSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});
ContactSchema.plugin(encrypt, {
  secret: "thisistestsecret",
  encryptedFields: ["password"]
});
module.exports = Contact = mongoose.model("contact", ContactSchema);
