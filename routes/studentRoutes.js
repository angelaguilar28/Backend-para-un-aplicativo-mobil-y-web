const express = require('express');
const StudentController = require('../controllers/studentController');

const router = express.Router();

//router.post('/notes', NoteController.createNote);
router.get('/student/:id', StudentController.getStudent);
//router.get('/studentSection/:id', StudentController.getSections);
//router.delete('/notes/:id', NoteController.deleteNote);

module.exports = router;