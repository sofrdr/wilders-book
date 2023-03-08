const { appDataSource } = require("../utils");
const Skill = require("../entity/Skill");

module.exports = {
  create: async (req, res) => {
    try {
      const newSkill = await appDataSource.getRepository(Skill).save(req.body);
      res.status(201).json({ newSkill, message: "New skill created" });
    } catch (error) {
      res.status(400).json({ error: "Error while creating new skill" });
    }
  },

  getAllSkills: async (req, res) => {
    try {
      const skills = await appDataSource.getRepository(Skill).find();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateSkill: async (req, res) => {
    try {
      const skill = await appDataSource
        .getRepository(Skill)
        .findOneBy({ id: req.params.id });
      if (!skill) {
        throw new Error("No skill founded");
      }
      appDataSource.getRepository(Skill).merge(skill, req.body);
      const skillUpdated = await appDataSource.getRepository(Skill).save(skill);
      res.status(201).json({ skillUpdated, message: "Skill updated" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteSkill: async (req, res) => {
    try {
      const data = appDataSource.getRepository(Skill).delete(req.params.id);
      res.status(200).json({ data, message: "Skill deleted" });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};
