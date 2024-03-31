const express = require("express")
const router = express.Router()
const contactController = require("../Controllers/contactController")

router.route("/contact").post(contactController)

module.exports = router;