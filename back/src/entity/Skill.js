const typeorm = require("typeorm");
const { EntitySchema } = typeorm;

module.exports = new EntitySchema({
  name: "Skill",
  tableName: "skills",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "text",
      unique: true,
    },
  },
});
