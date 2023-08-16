const express = require('express');
const TeacherController = require('../controllers/teacherController');

const router = express.Router();

//router.post('/notes', NoteController.createNote);
router.get('/teacher/:id', TeacherController.getTeacher);
//router.put('/notes/:id', NoteController.updateNote);
//router.delete('/notes/:id', NoteController.deleteNote);

module.exports = router;