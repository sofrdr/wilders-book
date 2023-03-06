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

  updateWilder: async (req, res) => {
    try {
      const wilder = await appDataSource
        .getRepository(Wilder)
        .findOneBy({ id: req.params.id });

      const data = await appDataSource
        .getRepository(Wilder)
        .merge(wilder, req.body);

      res.status(201).json(data);
    } catch (error) {
      res.status(404).json({ error });
    }
  },

  deleteWilder: async (req, res) => {
    try {
      const data = await appDataSource
        .getRepository(Wilder)
        .delete(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};
