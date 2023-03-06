const express = require("express");
const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");

const app = express();

const AppDataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [require("./entity/Wilder")],
});

app.get("/", (req, res) => {
  res.send("Hello world !");
});

const newWilder = {
  name: "Sophie Roudier",
};

const start = async () => {
  await AppDataSource.initialize();
  AppDataSource.getRepository(Wilder).save(newWilder);
  const data = await AppDataSource.getRepository(Wilder).find();
  console.log(data);
  app.listen(3000, () => {
    console.log("Listening on 3000");
  });
};

start();
