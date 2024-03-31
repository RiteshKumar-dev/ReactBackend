const express = require("express")
const { getAllUsers, getAllContacts, getAllServices, deleteUserById, getUserById, updateUserById, deleteContactsById, deleteServicesById } = require("../Controllers/adminController")
const authMiddleWare = require("../Middlewares/authMiddleWare")
const adminMiddleware = require("../Middlewares/adminMiddleware")
const router = express.Router()


router.route("/users").get(authMiddleWare, adminMiddleware, getAllUsers)
router.route("/users/:id").get(authMiddleWare, adminMiddleware, getUserById)
router.route("/users/update/:id").patch(authMiddleWare, adminMiddleware, updateUserById)
router.route("/users/delete/:id").delete(authMiddleWare, adminMiddleware, deleteUserById)



router.route("/contacts").get(authMiddleWare, adminMiddleware, getAllContacts)
router.route("/contacts/delete/:id").delete(authMiddleWare, adminMiddleware, deleteContactsById)

router.route("/services").get(authMiddleWare, adminMiddleware, getAllServices)
router.route("/services/delete/:id").delete(authMiddleWare, adminMiddleware, deleteServicesById)


module.exports = router