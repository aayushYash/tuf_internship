"use strict";
const { body } = require("express-validator");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Learn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Learn.init(
    {
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      explanation: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      tableName: "learn",
      modelName: "Learn",
    },
  );
  return Learn;
};

module.exports.learnValidationRules = () => {
  return [
    body("topic").notEmpty(),
    body("explanation").notEmpty(),
    body("category").notEmpty(),
  ];
};
