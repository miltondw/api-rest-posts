const mongoose = require("mongoose");
const config = require("./config");
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.error(err));
