const router = require("express").Router();

const { createScreen, getAllScreens } = require("../controllers/screens");

router.post("/", createScreen);
router.get("/", getAllScreens);

module.exports = router;
