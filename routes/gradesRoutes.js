const express = require('express');
const GradesController = require('../controllers/gradesController');

const router = express.Router();

router.post('/notes', GradesController.createGrades);
router.get('/notes', GradesController.getGrades);
router.put('/notes/:id', GradesController.updateGrades);
router.delete('/notes/:id', GradesController.deleteGrades);

module.exports = router;