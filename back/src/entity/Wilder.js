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
    email: {
      type: "text",
      unique: true,
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
