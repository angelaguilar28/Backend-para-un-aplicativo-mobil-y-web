const express = require('express');
const TeacherController = require('../controllers/teacherController');

const router = express.Router();

//router.post('/notes', NoteController.createNote);
router.get('/teacher/:id', TeacherController.getTeacher);
<<<<<<< HEAD
router.get('/teacherSub/:id', TeacherController.getTeacherSubjects);
//router.delete('/notes/:id', NoteController.deleteNote);
=======
router.get('/teacherList/:id', TeacherController.getTeacherSubjectsList);
router.get('/teacherSingleSubj/:id', TeacherController.getTeacherSingleSubjects);
router.get('/teacherStudents/:id', TeacherController.getTeacherStudents);
router.put('/teacherGrades', TeacherController.UpdateGrades);

module.exports = router;
>>>>>>> 55cb0a47c5c57f138d94c5023c321abcb5b657b4

