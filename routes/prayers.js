const express = require("express");
const router = express.Router();
const knex = require("../knex");
/* GET prayers listing. */
router.get("/", async (req, res, next) => {
  knex("prayer_time")
    .orderBy("id")
    .then((data) => {
      res.json({ success: true, data }).status(200);
    })
    .catch((error) => {
      console.log(`local:debug: error`, error);
      return res
        .json({ success: false, message: "Something went wrong!", error })
        .status(500);
    });
});

router.post("/", async (req, res, next) => {
  const newPrayers = req.body;
  newPrayers.forEach(async (prayer) => {
    await knex("prayer_time")
      .where({ id: prayer.id })
      .update({ name: prayer.name, time: prayer.time, iqama: prayer.iqama })
      .catch((error) => {
        return res
          .json({ success: false, message: "Something went wrong!", error })
          .status(500);
      });
  });

  const data = await knex("prayer_time")
    .orderBy("id")
    .catch((error) => {
      console.log(error);
      return res
        .json({ success: false, message: "Something went wrong!", error })
        .status(500);
    });

  res
    .json({
      success: true,
      message: "Prayers times updated successfully!",
      data,
    })
    .status(200);
});

module.exports = router;
