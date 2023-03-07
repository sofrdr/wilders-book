const { appDataSource } = require("../utils");
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

module.exports = {
  create: async (req, res) => {
    try {
      const newWilder = await appDataSource
        .getRepository(Wilder)
        .save(req.body);
      res.status(201).json({ newWilder, message: "New wilder created" });
    } catch (error) {
      res.status(400).json({ error: "Error while creating wilder" });
    }
  },

  getAllWilders: async (req, res) => {
    try {
      console.log(req);
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
      if (!wilder) {
        throw new Error("No wilder found");
      }
      appDataSource.getRepository(Wilder).merge(wilder, req.body);
      const data = await appDataSource.getRepository(Wilder).save(wilder);
      res.status(200).send(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
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

  addSkill: async (req, res) => {
    try {
      const wilderToUpdate = await appDataSource
        .getRepository(Wilder)
        .findOneBy({ name: req.body.wilderName });

      const skillToAdd = await appDataSource
        .getRepository(Skill)
        .findOneBy({ name: req.body.skillName });

      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      const data = await appDataSource
        .getRepository(Wilder)
        .save(wilderToUpdate);
      res.status(201).json(data);
    } catch (error) {
      console.log(error);
    }
  },
};
