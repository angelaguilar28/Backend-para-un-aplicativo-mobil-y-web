const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.get('/login/:usr/:pswd', AuthController.login);

module.exports = router;