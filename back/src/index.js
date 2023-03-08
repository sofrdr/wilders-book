const express = require("express");
const { appDataSource } = require("./utils");
const wilderRoutes = require("./routes/wilder-routes");
const skillRoutes = require("./routes/skill-routes");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.json());
app.use("/api/wilder", wilderRoutes);
app.use("/api/skill", skillRoutes);

const start = async () => {
  await appDataSource.initialize();
  app.listen(3001, () => {
    console.log("Listening on 3001");
  });
};

start();
