const express = require("express");
const router = express.Router();

let prayers = [
  {
    id: 1,
    prayerName: "FAJR",
    time: "06:00"
  },
  {
    id: 2,
    prayerName: "DHUHR",
    time: "12:00"
  },
  {
    id: 3,
    prayerName: "ASR",
    time: "16:00"
  },
  {
    id: 4,
    prayerName: "MAGHRIB",
    time: "18:30"
  },
  {
    id: 5,
    prayerName: "ISHA",
    time: "19:30"
  },
  {
    id: 6,
    prayerName: "JUMU'AH",
    time: "13:00"
  }
];

/* GET prayers listing. */
router.get("/", function(req, res, next) {
  res.json(prayers).status(200);
});

router.post("/", function(req, res, next) {
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
