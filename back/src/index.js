const express = require("express");
const { appDataSource } = require("./utils");
const wilderRoutes = require("./routes/wilder-routes");
const skillRoutes = require("./routes/skill-routes");

const app = express();
app.use(express.json());
app.use("/api/wilder", wilderRoutes);
app.use("/api/skill", skillRoutes);

const start = async () => {
  await appDataSource.initialize();
  app.listen(3000, () => {
    console.log("Listening on 3000");
  });
};

start();
