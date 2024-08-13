"use strict";
const jwt = require("jsonwebtoken");
const { Model } = require("sequelize");
const { body } = require("express-validator");

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

module.exports.adminValidationRules = () => {
  return [
    // username must be an email
    body("username").notEmpty().isAlphanumeric(),
    // password must be at least 5 chars long
    body("password").notEmpty(),
  ];
};
