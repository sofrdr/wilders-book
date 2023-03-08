const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");

router.get("/", skillController.getAllSkills);
router.post("/", skillController.create);
router.put("/:id", skillController.updateSkill);
router.delete("/:id", skillController.deleteSkill);

module.exports = router;
