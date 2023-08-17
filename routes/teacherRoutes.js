const express = require('express');
const TeacherController = require('../controllers/teacherController');

const router = express.Router();

//router.post('/notes', NoteController.createNote);
router.get('/teacher/:id', TeacherController.getTeacher);
//router.get('/teacherSubjList/:id', TeacherController.getTeacherSubjectsList);
//router.get('/teacherSingleSubj/:id', TeacherController.getTeacherSingleSubjects);

module.exports = router;

