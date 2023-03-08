const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Grade",
  tableName: "grades",
  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },
    value: {
      type: "int",
      unique: true,
    },
  },
  relations: {
    wilders: {
      target: "Wilder",
      type: "many-to-one",
      joinTable: true,
      eager: true,
    },
    skills: {
      target: "Skill",
      type: "many-to-one",
      joinTable: true,
      eager: true,
    },
  },
});
