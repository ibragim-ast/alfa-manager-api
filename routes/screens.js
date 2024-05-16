const router = require("express").Router();

const {
  createScreen,
  getAllScreens,
  deleteScreen,
} = require("../controllers/screens");

router.post("/", createScreen);
router.get("/", getAllScreens);
router.delete("/:id", deleteScreen);

module.exports = router;
