const { Learn, sequelize, Sequelize } = require("../models");
const { sanitize } = require("../utils/sanitizers.js");

module.exports.create_topic = async (req, res) => {
  const data = {
    topic: req.body.topic,
    explanation: req.body.explanation,
    category: sanitize(req.body.category.toLowerCase()),
  };
  try {
    const learn = await Learn.create(data);
    await learn.save();
    return res.status(201).json(learn);
  } catch (err) {
    console.log(err);
    return res.status(500).send("some error occured.");
  }
};

module.exports.category_get = async (req, res) => {
  const _category = sanitize(req.params.category.toLowerCase());
  try {
    const learn = await Learn.findAll({
      where: {
        category: _category,
      },
    });

    if (!learn) return res.status(400).send("No items found. :( ");

    return res.status(200).json(learn);
  } catch (err) {
    console.log(err);
    return res.status(500).send("some error occured.");
  }
};

module.exports.delete_topic = async (req, res) => {
  const _id = parseInt(req.params.id);

  try {
    const learn = await Learn.findByPk(_id);
    if (!learn) return res.status(400).send("Resource not found.");
    await learn.destroy();
    return res.status(200);
  } catch (err) {
    console.error(err);
    return res.send(500).send("Some error occured.");
  }
};

module.exports.category_list_get = async (req, res) => {
  try {
    const categories_json = await Learn.findAll({
      attributes: [
        [sequelize.fn("DISTINCT", Sequelize.col("category")), "category"],
      ],
    });
    const categories = [];
    categories_json.forEach((element) => {
      categories.push(element.category);
    });
    return res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Some error occured");
  }
};

module.exports.edit_put = async (req, res) => {
  const data = {
    id: parseInt(req.body.id),
    topic: req.body.topic,
    explanation: req.body.explanation,
    category: sanitize(req.body.category.toLowerCase()),
  };
  try {
    let learn = await Learn.findByPk(data.id);
    if (!learn) return res.status(404).send("Resource not found.");

    if (learn.topic != data.topic) {
      learn.topic = data.topic;
    }
    if (learn.explanation != data.explanation) {
      learn.explanation = data.explanation;
    }
    if (learn.category != data.category) {
      learn.category = data.category;
    }
    await learn.save();
    return res.status(200).json(learn);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Some error occured on our side.");
  }
};
