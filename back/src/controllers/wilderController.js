const { appDataSource } = require("../utils");
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");
const Grade = require("../entity/Grade");

module.exports = {
  create: async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        throw new Error("Please enter an email");
      }
      const existingUser = await appDataSource
        .getRepository(Wilder)
        .findOneBy({ email: email });
      if (existingUser) {
        return res.status(409).send({ error: "Email already exists" });
      }
      const newWilder = await appDataSource
        .getRepository(Wilder)
        .save(req.body);
      return res.status(201).send({ newWilder, message: "New wilder created" });
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },

  getAllWilders: async (req, res) => {
    try {
      const wilders = await appDataSource.getRepository(Wilder).find();
      return res.send(wilders);
    } catch (error) {
      return res.status(404).send({ error });
    }
  },

  updateWilder: async (req, res) => {
    try {
      const wilder = await appDataSource
        .getRepository(Wilder)
        .findOneBy({ id: req.params.id });
      if (!wilder) {
        return res.status(404).send({ error: "No wilder found" });
      }
      appDataSource.getRepository(Wilder).merge(wilder, req.body);
      const data = await appDataSource.getRepository(Wilder).save(wilder);
      return res.status(200).send(data);
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },

  deleteWilder: async (req, res) => {
    try {
      const wilder = await appDataSource
        .getRepository(Wilder)
        .findOneBy({ id: req.params.id });
      if (!wilder) {
        return res.status(404).send({ error: "No wilder found" });
      }
      const data = await appDataSource
        .getRepository(Wilder)
        .delete(req.params.id);
      return res.status(200).send(data);
    } catch (error) {
      return res.status(400).send({ error });
    }
  },

  addSkill: async (req, res) => {
    try {
      const wilderToUpdate = await appDataSource
        .getRepository(Wilder)
        .findOneBy({ id: req.params.wilderId });
      if (!wilderToUpdate) {
        return res.status(404).send({ error: "No wilder found" });
      }

      const skillToAdd = await appDataSource
        .getRepository(Skill)
        .findOneBy({ id: req.params.skillId });
      if (!skillToAdd) {
        return res.status(404).send({ error: "No skill to add" });
      }

      wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
      const data = await appDataSource
        .getRepository(Wilder)
        .save(wilderToUpdate);
      return res.status(201).send({ message: "Skill created" });
    } catch (error) {
      return res.status(400).send({ error });
    }
  },
};
