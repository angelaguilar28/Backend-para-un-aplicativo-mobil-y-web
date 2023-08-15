const express = require('express');
const StudentController = require('../controllers/studentController');

const router = express.Router();

//router.post('/notes', NoteController.createNote);
router.get('/student', StudentController.getStudent);
//router.put('/notes/:id', NoteController.updateNote);
//router.delete('/notes/:id', NoteController.deleteNote);

module.exports = router;