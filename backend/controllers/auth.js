const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models");

module.exports.signup_post = async (req, res) => {
  if (!req.body.password) return res.status(400).send("password needed.");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const data = {
    username: req.body.username,
    password: hashedPassword,
  };

  try {
    const admin = await Admin.create(data);
    await admin.save();
    res.status(201).json(admin);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error, admin not created.");
  }
};

module.exports.login_post = async (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
  };
  console.log(data);

  try {
    const admin = await Admin.findOne({ where: { username: data.username } });
    if (!admin) return res.send(400).send("User not found.");

    const validPassword = await bcrypt.compare(data.password, admin.password);

    if (!validPassword) {
      console.log("Invalid password");
      return res.status(400).send("Invalid password");
    }
    const token = admin.generateToken();
    res.json({ "x-auth-token": token });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error ocuured.");
  }
};
