let images = [
  {
    id: 1,
    image_url:
      "https://res.cloudinary.com/db1qzy4ut/image/upload/v1583643888/Expansion/uicaexpansion.jpg",
    caption: "Masjid Expansion",
    hasBtn: true,
    btnText: "Donate here",
    btnLinkTo: "Donation",
  },
  {
    id: 2,
    image_url:
      "https://res.cloudinary.com/db1qzy4ut/image/upload/v1583646491/Youth/youthEvent1.jpg",
    caption: "Youth events",
    hasBtn: false,
    btnText: "",
    btnLinkTo: "",
  },
  {
    id: 3,
    image_url:
      "https://res.cloudinary.com/db1qzy4ut/image/upload/v1583646872/Haj/Haj1.jpg",
    caption: "Haj trip",
    hasBtn: false,
    btnText: "",
    btnLinkTo: "",
  },
];
module.exports = {
  getImages: async (req, res) => {
    res.send(images).status(200);
  },

  deleteById: (req, res) => {
    const image = req.body;
    images = images.filter((img) => image.id !== img.id);

    res.json(images).status(200);
  },
};
