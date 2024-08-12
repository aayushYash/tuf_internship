const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT;

const jwtPrivateKey = process.env.JWT_SECRET;
if (!jwtPrivateKey) {
  console.error("JWT_SECRET not provided.");
  process.exit(1);
}

app.use(
  cors({
    origin: "*", // Allow requests from any origin
    credentials: true, // You may need this if your frontend sends cookies
  }),
);

const authRouter = require("./routes/auth.js");
const learnRouter = require("./routes/learn.js");
const quizRouter = require("./routes/quiz.js");
const db = require("./models");

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/learn", learnRouter);
app.use("/api/v1/quiz", quizRouter);

db.sequelize
  .sync()
  .then((res) => {
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error, Database not connected.");
    console.log(err);
  });
