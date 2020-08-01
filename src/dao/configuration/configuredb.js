const mongoose = require("mongoose");
const uri =
  "mongodb+srv://root:" +
  process.env.Password +
  "@cluster0.hulcx.mongodb.net/goal-portal-db?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
