const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");
const Skill = require("./entity/Skill");
const Grade = require("./entity/Grade");

module.exports = {
  appDataSource: new typeorm.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true,
    entities: [Wilder, Skill, Grade],
  }),
};
