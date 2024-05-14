const User = require("../models/user");

module.exports.createUser = (req, res) => {
  const { name, password, role } = req.body;
  console.log(req.body);
  User.create({ name, password, role })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

module.exports.getUserInfo = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

module.exports.updateUserInfo = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      password: req.body.password,
      role: req.body.role,
    },
    { new: true }
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

module.exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

module.exports.authorization = (req, res) => {
  const { name, password } = req.body;
  User.findOne({ name, password })
    .then((user) => {
      console.log(user);
      res.send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};
