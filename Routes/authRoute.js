const express = require("express")
const router = express.Router()
const authController = require("../Controllers/authController")
const { signupSchema, loginSchema } = require("../Validators/authValidators")
const validate = require("../Middlewares/validateMiddleware")
const authMiddleWare = require("../Middlewares/authMiddleWare")

router.route("/").get(authController.home)
router.route("/signup").post(validate(signupSchema), authController.signup)
router.route("/login").post(validate(loginSchema), authController.login)
router.route("/user").get(authMiddleWare, authController.user)

module.exports = router;