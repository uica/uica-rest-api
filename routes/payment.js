const express = require("express");
const router = express.Router();
const makePayment = require("../controllers/makePayment");
const makeApplePay = require("../controllers/makeApplePay");
router.post("/", makePayment);
router.post("/applePay", makeApplePay);

module.exports = router;
