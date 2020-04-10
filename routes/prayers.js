const express = require("express");
const router = express.Router();
const knex = require("../knex");
/* GET prayers listing. */
router.get("/", async (req, res, next) => {
  const prayers = await knex("prayer_time")
    .orderBy("id")
    .catch((error) => {
      res
        .json({ success: false, message: "Something went wrong!", error })
        .status(500);
    });
  res.json({ success: true, data: prayers }).status(200);
});

router.post("/", async (req, res, next) => {
  const newPrayers = req.body;
  newPrayers.forEach(async (prayer) => {
    await knex("prayer_time")
      .where({ id: prayer.id })
      .update({ name: prayer.name, time: prayer.time, iqama: prayer.iqama })
      .catch((error) => {
        res
          .json({ success: false, message: "Something went wrong!", error })
          .status(500);
      });
  });

  const data = await knex("prayer_time").orderBy("id");

  res
    .json({
      success: true,
      message: "Prayers times updated successfully!",
      data,
    })
    .status(200);
});

module.exports = router;
