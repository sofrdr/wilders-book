const express = require("express");
const router = express.Router();
const wilderController = require("../controllers/wilderController");
const limiter = require("../middlewares/limiter");

router.get("/", limiter, wilderController.getAllWilders);
router.post("/", wilderController.create);
router.put("/:id", wilderController.updateWilder);
router.delete("/:id", wilderController.deleteWilder);
router.post("/:wilderId/skill/:skillId/add", wilderController.addSkill);

module.exports = router;
