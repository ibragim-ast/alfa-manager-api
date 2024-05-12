// const router = require("express").Router();
// const { users } = require("../db.js");

// const doesUserExist = (req, res, next) => {
//   const { id } = req.params;
//   if (!users[id]) {
//     res.send({ error: "Такого пользователя нет" });
//     return;
//   }

//   next();
// };

// const sendUser = (req, res, next) => {
//   const { name, age } = users[id];
//   res.send(`Пользователь ${name}, ${age} лет`);
// };

// router.get("/users/:id", doesUserExist);
// router.get("/users/:id", sendUser);

// module.exports = router;
