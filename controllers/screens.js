const LedScreen = require("../models/ledScreen.js");
const Advertisement = require("../models/advertisement.js");

module.exports.createScreen = (req, res) => {
  const { name, location, price, blockDuration, advertisements } = req.body;
  console.log(req.body);
  LedScreen.create({ name, location, price, blockDuration })
    .then((screen) => {
      if (advertisements && advertisements.length > 0) {
        Advertisement.find({ _id: { $in: advertisements } })
          .then((foundAdvertisements) => {
            screen.advertisements = foundAdvertisements.map((ad) => ad._id);
            return screen.save();
          })
          .then(() => res.send({ data: screen }))
          .catch((err) =>
            res.status(500).send({ message: "Произошла ошибка" })
          );
      } else {
        res.send({ data: screen });
      }
    })
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

module.exports.getAllScreens = (req, res) => {
  LedScreen.find({})
    .populate("advertisements")
    .then((screens) => {
      res.send({ screens });
    })
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

module.exports.deleteScreen = (req, res) => {
  LedScreen.findByIdAndDelete(req.params.id)
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};
