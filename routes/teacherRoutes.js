const express = require('express');
const TeacherController = require('../controllers/teacherController');

const router = express.Router();


router.get('/teacher/:id', TeacherController.getTeacher);
router.get('/teacherList/:id', TeacherController.getTeacherSubjectsList);
router.get('/teacherSingleSubj/:id', TeacherController.getTeacherSingleSubjects);
router.get('/teacherStudents/:id', TeacherController.getTeacherStudents);
router.put('/teacherGrades', TeacherController.updateGrades);
router.put('/teacherValidation', TeacherController.updateValidate);
router.put('/teacherPhoto', TeacherController.updatePhoto);



module.exports = router;

