exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("prayer_time")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("prayer_time").insert([
        { name: "FAJR", time: "04:41", iqama: "06:00" },
        { name: "DHUHR", time: "12:31", iqama: "13:00" },
        { name: "ASR", time: "17:05", iqama: "17:30" },
        { name: "MAGHRIB", time: "18:55", iqama: "19:15" },
        { name: "ISHA", time: "20:16", iqama: "20:30" },
        { name: "JUMU'AH", time: "01:00", iqama: "01:00" },
      ]);
    });
};
