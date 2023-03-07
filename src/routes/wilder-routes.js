const express = require("express");
const router = express.Router();
const wilderController = require("../controllers/wilder");

router.get("/", wilderController.getAllWilders);
router.post("/", wilderController.create);
router.put("/:id", wilderController.updateWilder);
router.delete("/:id", wilderController.deleteWilder);
router.post("/skills", wilderController.addSkill);

module.exports = router;
