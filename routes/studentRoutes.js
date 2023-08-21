const express = require('express');
const StudentController = require('../controllers/studentController');

const router = express.Router();


router.get('/student/:id', StudentController.getStudent);
router.get('/studentSection/:id',StudentController.getSection);


module.exports = router;