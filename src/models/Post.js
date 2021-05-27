const { Schema, model } = require("mongoose");
const postSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  paragraph: { type: Array },
  subtitle: { type: Array },
  type: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = model("Post", postSchema);
