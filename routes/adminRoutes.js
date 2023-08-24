const express = require('express');
const AdminController = require('../controllers/adminController');

const router = express.Router();

router.get('/periodos', AdminController.getPeriodos);
router.get('/escuelas', AdminController.getEscuelas);
router.put('/profper', AdminController.getProfesorPeriodo);
//router.delete('/notes/:id', NoteController.deleteNote);

module.exports = router;