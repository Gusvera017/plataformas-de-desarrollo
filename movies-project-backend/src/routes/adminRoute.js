const express = require('express');
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get('/admin', adminController.getAllUsers);
router.delete('/admin/:id', adminController.deleteUser);

module.exports = router;