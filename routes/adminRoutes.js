const express = require('express');
const AdminController = require('../controllers/adminController');

const router = express.Router();

router.get('/periodos', AdminController.getPeriodos);
router.get('/escuelas', AdminController.getEscuelas);
router.get('/profper', AdminController.getProfesorPeriodo);
router.get('/profpercurso', AdminController.getProfesorPeriodoCurso);

module.exports = router;