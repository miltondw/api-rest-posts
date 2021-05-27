const router = require("express").Router();
router.get("/", (rep, res) => {
  res.json({ message: "Hi from Post " });
});
module.exports = router;
