const express = require("express");
const { appDataSource } = require("./utils");
const wilderController = require("./controllers/wilder");
const skillController = require("./controllers/skill");

const app = express();
app.use(express.json());

app.get("/api/wilder", wilderController.getAllWilders);

app.post("/api/wilder", wilderController.create);

app.put("/api/wilder/:id", wilderController.updateWilder);

app.delete("/api/wilder/:id", wilderController.deleteWilder);

app.get("/api/skill", skillController.getAllSkills);
app.post("/api/skill", skillController.create);
app.put("/api/skill/:id", skillController.updateSkill);
app.delete("/api/skill/:id", skillController.deleteSkill);

const start = async () => {
  await appDataSource.initialize();
  app.listen(3000, () => {
    console.log("Listening on 3000");
  });
};

start();
