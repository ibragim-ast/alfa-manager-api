const router = require("express").Router();
const {
  createUser,
  getUserInfo,
  updateUserInfo,
  deleteUser,
  authorization,
} = require("../controllers/users");

router.post("/signup", createUser);

router.post("/signin", authorization);

router.get("/:id", getUserInfo);

router.patch("/:id", updateUserInfo);

router.delete("/:id", deleteUser);

module.exports = router;
