const auth = require("../middleware/auth.js");
const validate = require("../middleware/validators.js");
const { Router } = require("express");
const authController = require("../controllers/auth.js");
const { adminValidationRules } = require("../models/admin.js");

const router = Router();

router.post(
  "/signup",
  auth,
  adminValidationRules(),
  validate,
  authController.signup_post,
);
router.post(
  "/login",
  adminValidationRules(),
  validate,
  authController.login_post,
);

module.exports = router;
