const Post = require("../models/Post");
const ctrlPosts = {};

ctrlPosts.getPosts = async (req, res) => {
  const books = await Post.find();
  res.json(books);
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
  const { title, paragraph, subtitle, type } = req.body;
  const newPost = new Post({ title, paragraph, subtitle, type });
  await newPost.save();
  res.json({ message: "Post Created" });
};
ctrlPosts.updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndUpdate(id, req.body);
    res.json({ message: "Post Updated" });
  } catch (err) {
    res.status(500).json({
      message: err.message || `Cannot updated Task with id: ${id}`,
    });
  }
};
ctrlPosts.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post Deleted" });
};

module.exports = ctrlPosts;
