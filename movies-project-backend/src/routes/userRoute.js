const express = require('express');
const router = express.Router();
const { requireAuth } = require("../middlewares/auth");

//Controlador
const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/welcome", requireAuth, userController.welcome);
router.get('/refresh-token', userController.refreshToken);

module.exports = router;