const router = require("express").Router();

const { createAdvertisement } = require("../controllers/advertisement");

router.post("/", createAdvertisement);

module.exports = router;
