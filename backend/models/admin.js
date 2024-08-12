"use strict";
const jwt = require("jsonwebtoken");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    generateToken() {
      const token = jwt.sign(
        { _id: this.id, username: this.username },
        process.env.JWT_SECRET,
      );
      return token;
    }
  }

  Admin.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlphanumeric: true,
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: "admin",
      modelName: "Admin",
    },
  );
  return Admin;
};
