const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("jwt", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
