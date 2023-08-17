const Teacher = require('../models/Teacher');

class TeacherController {
    // static async createNote(req, res) {
    //   try {
    //     const { studentCode, professorCode, note, cycle, course } = req.body;
    //     const createdNote = await Note.create(studentCode, professorCode, note, cycle, course);
    //     res.json(createdNote);
    //   } catch (error) {
    //     res.status(500).json({ error: 'An error occurred while creating the note.' });
    //   }
    // }
  
    static async getTeacher(req, res) {
      try {
        const teacherCod = req.params.id;

        console.log('codigo en el controller:', teacherCod);

        const teacher = await Teacher.getTeacher(teacherCod);
        res.json(teacher);
      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }  


    static async getTeacherSubjectsList(req, res) {
      try {
        const teacherSubjCod = req.params.id;

        //console.log('codigo en el controller:', teacherSubjCod);
        const teacher = await Teacher.getTeacherSubjectsList(teacherSubjCod);
        res.json(teacher);

      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }
  


    static async getTeacherSingleSubjects(req, res) {
      try {

        const teacherSubjCod = req.params.id;
        //console.log('codigo en el controller:', teacherSubjCod);
        const teacher = await Teacher.getTeacherSingleSubjects(teacherSubjCod);
        res.json(teacher);

      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }


    static async getTeacherStudents(req, res) {
      try {

        const teacherSubjCod = req.params.id;
        //console.log('codigo en el controller:', teacherSubjCod);
        const teacher = await Teacher.getTeacherStudents(teacherSubjCod);
        res.json(teacher);
      } catch (error) {

        res.status(500).json({ error: 'An error occurred while fetching the notes.' });
      }
    }

    // FALTA CONTINUAR DESARROLLO
    static async UpdateGrades(req, res) {
      try {
        const gradeId = req.params.id;
        const { ep, ef, pp } = req.body;
  
        const updatedGrade = await Note.update(gradeId, ep, ef, pp);
        res.json(updatedGrade);

      } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the note.' });
      }
    }
  

    // static async deleteNote(req, res) {
    //   try {
    //     const noteId = req.params.id;
  
    //     const deletedNote = await Note.delete(noteId);
    //     res.json(deletedNote);
    //   } catch (error) {
    //     res.status(500).json({ error: 'An error occurred while deleting the note.' });
    //   }
    // }
  }
  
  module.exports = TeacherController;
  