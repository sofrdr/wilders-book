const express = require("express");
const gradeController = require("../controllers/gradeController");
const router = express.Router();
const skillController = require("../controllers/skillController");

router.get("/", skillController.getAllSkills);
router.post("/", skillController.create);
router.put("/:id", skillController.updateSkill);
router.delete("/:id", skillController.deleteSkill);

router.post("/grade", gradeController.create);

module.exports = router;
