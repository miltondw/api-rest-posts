const router = require("express").Router();
const {
  findAllPosts,
  cretePost,
  deletePost,
  findOnePost,
  updatePost,
} = require("../controllers/post.controllers");

router.get("/", findAllPosts);
router.get("/:id", findOnePost);
router.post("/", cretePost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
