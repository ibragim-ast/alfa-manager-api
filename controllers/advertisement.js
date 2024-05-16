const LedScreen = require("../models/ledScreen.js");
const Advertisement = require("../models/advertisement.js");

module.exports.createAdvertisement = async (req, res) => {
  const {
    name,
    customer,
    duration,
    discount,
    startDate,
    endDate,
    isActive,
    isFree,
    screenId,
  } = req.body;

  if (new Date(startDate) >= new Date(endDate)) {
    return res
      .status(400)
      .send({ message: "Дата окончания должна быть позже даты начала" });
  }

  try {
    const screen = await LedScreen.findById(screenId);
    if (!screen) {
      return res.status(404).send({ message: "Экран не найден" });
    }

    const advertisement = await Advertisement.create({
      name,
      customer,
      duration,
      discount,
      startDate,
      endDate,
      isActive,
      isFree,
      screen: screenId,
    });

    screen.advertisements.push(advertisement._id);
    await screen.save();

    res.status(201).send({ data: advertisement });
  } catch (error) {
    console.error("Ошибка при создании рекламы:", error);
    res.status(500).send({ message: "Произошла ошибка при создании рекламы" });
  }
};
