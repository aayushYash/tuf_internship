const auth = require("../middleware/auth.js");
const { Router } = require("express");
const learnController = require("../controllers/learn.js");
const { learnValidationRules } = require("../models/learn.js");
const validate = require("../middleware/validators.js");
const { body, param } = require("express-validator");

const router = Router();

router.post(
  "/create",
  auth,
  learnValidationRules(),
  validate,
  learnController.create_topic,
);
router.get(
  "/:category",
  param("category").notEmpty(),
  validate,
  learnController.category_get,
);
router.delete(
  "/:id",
  auth,
  param("id")
    .notEmpty()
    .matches(/[0-9]+/),
  validate,
  learnController.delete_topic,
);
router.get("/", learnController.category_list_get);
router.put(
  "/edit",
  auth,
  learnValidationRules(),
  validate,
  body("id").notEmpty(),
  validate,
  learnController.edit_put,
);

module.exports = router;
