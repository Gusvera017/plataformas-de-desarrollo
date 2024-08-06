const express = require('express');
const router = express.Router();
const { requireAuth } = require("../middlewares/auth");

//Controlador
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/welcome", requireAuth, userController.welcome);
router.get('/refresh-token', userController.refreshToken);
router.get('/admin', adminController.getAllUsers);

module.exports = router;