const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");
const Skill = require("./entity/Skill");

module.exports = {
  appDataSource: new typeorm.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true,
    entities: [Wilder, Skill],
  }),
};
