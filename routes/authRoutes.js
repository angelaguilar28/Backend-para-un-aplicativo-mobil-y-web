const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.get('/login/:email/:pswd', AuthController.login);

module.exports = router;