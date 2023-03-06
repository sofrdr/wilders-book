const express = require("express");
const { appDataSource } = require("./utils");
const Wilder = require("./entity/Wilder");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const wilders = await appDataSource.getRepository(Wilder).find();
  res.send(wilders);
});

const newWilder = {
  name: "Sophie Roudier",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  skills: ["HTML", "React", "Node"],
};

const start = async () => {
  await appDataSource.initialize();
  app.listen(3000, () => {
    console.log("Listening on 3000");
  });
};

start();
