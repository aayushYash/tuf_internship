const auth = require("../middleware/auth.js");
const { Router } = require("express");
const authController = require("../controllers/auth.js");

const router = Router();

router.post("/signup", auth, authController.signup_post);
router.post("/login", authController.login_post);

module.exports = router;
