const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const AutoschoolStudent = sequelize.define("AutoschoolStudent", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: false },
  email: { type: DataTypes.STRING, unique: false, allowNull: false },
  answers: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = { User, AutoschoolStudent };
