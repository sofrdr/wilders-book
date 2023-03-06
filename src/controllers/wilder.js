const { appDataSource } = require("../utils");
const Wilder = require("../entity/Wilder");

module.exports = {
  create: (req, res) => {
    appDataSource
      .getRepository(Wilder)
      .save(req.body)
      .then(() => res.send("Created wilder"))
      .catch(() => res.send("Error while creating wilder"));
  },
};
