const { Quiz, sequelize, Sequelize } = require("../models");
const { sanitize } = require("../utils/sanitizers.js");

module.exports.create_question = async (req, res) => {
  const data = {
    question: req.body.question,
    answer: req.body.answer,
    option_1: req.body.option_1,
    option_2: req.body.option_2,
    option_3: req.body.option_3,
    option_4: req.body.option_4,
    category: sanitize(req.body.category.toLowerCase()),
  };
  try {
    const quiz = await Quiz.create(data);
    await quiz.save();
    return res.status(201).json(quiz);
  } catch (err) {
    console.log(err);
    res.status(500).send("some error occured.");
  }
};

module.exports.category_questions_get = async (req, res) => {
  // Get all the questions of the category.
  const _category = sanitize(req.params.category.toLowerCase());
  try {
    const quiz = await Quiz.findAll({
      where: {
        category: _category,
      },
    });

    if (!quiz) return res.status(400).send("No items found. :( ");

    res.status(200).json(quiz);
  } catch (err) {
    console.log(err);
    res.status(500).send("some error occured.");
  }
};

module.exports.delete_question = async (req, res) => {
  const _id = parseInt(req.params.id);

  try {
    const quiz = await Quiz.findByPk(_id);
    if (!quiz) return res.status(400).send("Resource not found.");
    await quiz.destroy();
    return res.status(204);
  } catch (err) {
    console.error(err);
    return res.send(500).send("Some error occured.");
  }
};

module.exports.category_list_get = async (req, res) => {
  try {
    const categories_json = await Quiz.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", Sequelize.col("category")), "category"],
      ],
    });
    const categories = [];
    categories_json.forEach((element) => {
      categories.push(element.category);
    });
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).send("Some error occured");
  }
};

module.exports.edit_put = async (req, res) => {
  const data = {
    id: parseInt(req.body.id),
    question: req.body.question,
    answer: req.body.answer,
    option_1: req.body.option_1,
    option_2: req.body.option_2,
    option_3: req.body.option_3,
    option_4: req.body.option_4,
    category: sanitize(req.body.category.toLowerCase()),
  };

  try {
    let quiz = await Quiz.findByPk(data.id);
    if (!quiz) return res.status(404).send("Resource not found.");

    quiz.question =
      data.question != quiz.question ? data.question : quiz.question;
    quiz.answer = data.answer != quiz.answer ? data.answer : quiz.answer;
    quiz.option_1 =
      data.option_1 != quiz.option_1 ? data.option_1 : quiz.option_1;
    quiz.option_2 =
      data.option_2 != quiz.option_2 ? data.option_2 : quiz.option_2;
    quiz.option_3 =
      data.option_3 != quiz.option_3 ? data.option_3 : quiz.option_3;
    quiz.option_4 =
      data.option_4 != quiz.option_4 ? data.option_4 : quiz.option_4;
    quiz.category =
      data.category != quiz.category ? data.category : quiz.category;
    await quiz.save();
    return res.status(200).json(quiz);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Some error occured on our side.");
  }
};
