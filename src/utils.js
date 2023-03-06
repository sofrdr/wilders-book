const typeorm = require("typeorm");
const Wilder = require("./entity/Wilder");

module.exports = {
  appDataSource: new typeorm.DataSource({
    type: "sqlite",
    database: "./wildersdb.sqlite",
    synchronize: true,
    entities: [Wilder],
  }),
};
