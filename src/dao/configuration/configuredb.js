const mongoose = require("mongoose");
console.log(process.env);
const uri =
  process.env.DB_HOST +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  process.env.DB_NAME;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));
