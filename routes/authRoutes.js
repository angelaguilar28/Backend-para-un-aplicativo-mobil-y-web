const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.get('/login/:id/:idp', AuthController.login);

module.exports = router;