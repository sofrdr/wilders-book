const typeorm = require("typeorm");
const { EntitySchema } = typeorm;

module.exports = new EntitySchema({
  name: "Wilder",
  tableName: "wilders",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "text",
    },
    description: {
      type: "text",
    },
    skills: {
      type: "text",
      default: "[]",
    },
  },
});
