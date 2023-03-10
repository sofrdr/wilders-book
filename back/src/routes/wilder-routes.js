const express = require("express");
const router = express.Router();
const wilderController = require("../controllers/wilderController");
const limiter = require("../middlewares/limiter");

router.get("/", wilderController.getAllWilders);
router.post("/", wilderController.create);
router.put("/:id", wilderController.updateWilder);
router.delete("/:id", wilderController.deleteWilder);
router.post("/:wilderId/skill/:skillId/add", wilderController.addSkill);
router.delete("/:wilderId/skill/:skillId/delete", wilderController.removeSkill);

module.exports = router;
