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
  },
  relations: {
    skills: {
      target: "Skill",
      type: "many-to-many",
      joinTable: true,
      cascade: true,
      eager: true,
    },
  },
});
