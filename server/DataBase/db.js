const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.NAME,
  process.env.PASSWORD,
  {
    dialect: process.env.DB_NAME,
    host: process.env.HOST,
    port: process.env.DB_PORT,
  }
);

module.exports = sequelize;
