const router = require("express").Router();
const {
  getPosts,
  cretePost,
  deletePost,
  findOnePost,
  updatePost,
} = require("../controllers/post.controllers");

router.get("/", getPosts);
router.get("/:id", findOnePost);
router.post("/", cretePost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
