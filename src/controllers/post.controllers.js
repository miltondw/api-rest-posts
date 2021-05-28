const Post = require("../models/Post");
const ctrlPosts = {};

ctrlPosts.findAllPosts = async (req, res) => {
  try {
    const books = await Post.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({
      message: err.message || "something goes wrong retrieving the Posts",
    });
  }
};
ctrlPosts.findOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post)
      return res
        .status(404)
        .json({ message: `Post with id : ${id} does not exists` });

    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: err.message || `Error retrieving post with id: ${id}`,
    });
  }
};
ctrlPosts.cretePost = async (req, res) => {
  try {
    const { title, paragraph, subtitle, type } = req.body;
    const newPost = new Post({ title, paragraph, subtitle, type });
    await newPost.save();
    res.json({ message: "Post Created" });
  } catch (err) {
    res.status(500).json({
      message: err.message || "something goes wrong creting the Post",
    });
  }
};
ctrlPosts.updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndUpdate(id, req.body);
    res.json({ message: "Post Updated" });
  } catch (err) {
    res.status(500).json({
      message: err.message || `Cannot updated Post with id: ${id}`,
    });
  }
};
ctrlPosts.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.json({ message: "Post Deleted" });
  } catch (err) {
    res.status(500).json({
      message: err.message || `Cannot delete Task with id: ${id}`,
    });
  }
};

module.exports = ctrlPosts;
