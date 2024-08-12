const auth = require("../middleware/auth.js");
const { Router } = require("express");
const quizController = require("../controllers/quiz.js");

const router = Router();

router.post("/create", auth, quizController.create_question);
router.get("/:category", quizController.category_questions_get);
router.delete("/:id", auth, quizController.delete_question);
router.get("/", quizController.category_list_get);
router.put("/edit", auth, quizController.edit_put);

module.exports = router;
