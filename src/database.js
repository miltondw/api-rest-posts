const mongoose = require("mongoose");
const mongodbURL = process.env.MONGODB_URI || "mongodb://localhost/posts";
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.error(err));
