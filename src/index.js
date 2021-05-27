const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
//Initalizations
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
//Routes
app.use("/api/posts", require("./routes/posts"));

//Stactic files
app.use(express.static(path.join(__dirname,'public')))

app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Start the server
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
