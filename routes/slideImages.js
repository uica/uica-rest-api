const express = require("express");
const router = express.Router();
const { getImages, deleteById } = require("../controllers/slides");
router.get("/", getImages);
router.delete("/", deleteById);

module.exports = router;
