const express = require("express");
const router = express.Router();
const getImages = require("../controllers/getImages");
router.get("/", getImages);

module.exports = router;
