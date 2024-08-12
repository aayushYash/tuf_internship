const auth = require("../middleware/auth.js");
const { Router } = require("express");
const learnController = require("../controllers/learn.js");

const router = Router();

router.post("/create", auth, learnController.create_topic);
router.get("/:category", learnController.category_get);
router.delete("/:id", auth, learnController.delete_topic);
router.get("/", learnController.category_list_get);
router.put("/edit", auth, learnController.edit_put);

module.exports = router;
