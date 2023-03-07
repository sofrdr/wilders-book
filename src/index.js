const express = require("express");
const { appDataSource } = require("./utils");
const wilderController = require("./controllers/wilder");

const app = express();
app.use(express.json());

app.get("/api/wilder", wilderController.getAllWilders);

app.post("/api/wilder", wilderController.create);

app.put("/api/wilder/:id", wilderController.updateWilder);

app.delete("/api/wilder/:id", wilderController.deleteWilder);

const start = async () => {
  await appDataSource.initialize();
  app.listen(3000, () => {
    console.log("Listening on 3000");
  });
};

start();
