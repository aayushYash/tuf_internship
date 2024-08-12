"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quiz.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      option_1: { type: DataTypes.STRING },
      option_2: { type: DataTypes.STRING },
      option_3: { type: DataTypes.STRING },
      option_4: { type: DataTypes.STRING },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      tableName: "quiz",
      modelName: "Quiz",
    },
  );
  return Quiz;
};
