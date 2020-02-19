var express = require("express");
var router = express.Router();

let prayers = [
  { id: 1, prayerName: "FAJR", time: "06:00 AM" },
  { id: 2, prayerName: "DHUHR", time: "12:00 PM" },
  { id: 3, prayerName: "ASR", time: "04:00 PM" },
  { id: 4, prayerName: "MAGHRIB", time: "06:00 PM" },
  { id: 5, prayerName: "ISHA", time: "07:30 PM" },
  { id: 6, prayerName: "JUMU'AH", time: "01:00 PM" }
];

/* GET prayers listing. */
router.get("/", function(req, res, next) {
  res.json(prayers).status(200);
});

router.post("/", function(req, res, next) {
  console.log("TCL: req", req.body);
  const newPrayers = req.body;
  prayers = [...newPrayers];
  res.json(prayers).status(200);
});

router.get("/:prayerName", function(req, res, next) {
  const { prayerName } = req.params;
  const prayer = prayers.find(
    el => el.prayerName.toLowerCase() === prayerName.toLowerCase()
  );
  console.log("TCL: prayer", prayer);
  res.json(prayer).status(200);
});

router.post("/:prayerName", function(req, res, next) {
  const { prayerName } = req.params;
  const { time } = req.body;
  const newPrayers = prayers.map(p => {
    if (p.prayerName.toLowerCase() === prayerName.toLowerCase()) {
      p.time = time;
      return p;
    }
    return p;
  });

  prayers = [...newPrayers];
  res.json(prayers).status(200);
});

module.exports = router;
