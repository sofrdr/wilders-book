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

  getAllWilders: async (req, res) => {
    try {
      const wilders = await appDataSource.getRepository(Wilder).find();
      res.send(wilders);
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};
