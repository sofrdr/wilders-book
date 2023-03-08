const Grade = require("../entity/Grade");
const { appDataSource } = require("../utils");

module.exports = {
  create: async (req, res) => {
    for (let i = 0; i < 21; i++) {
      await appDataSource.getRepository(Grade).save({ value: i });
    }
    return res.status(201);
  },
};
